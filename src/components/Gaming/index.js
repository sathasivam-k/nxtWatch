import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import GamingVideoCard from '../GamingVideoCard'
import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {
  LoaderContainer,
  GamingVideoContainer,
  GamingTitleContainer,
  GamingVideoTitle,
  GamingText,
  VideoDetailsList,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videoDetails: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      // console.log(updatedData)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onRetry = () => {
    this.getVideos()
  }

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderSuccessView = () => {
    const {videoDetails} = this.state
    return (
      <VideoDetailsList>
        {videoDetails.map(eachItem => (
          <GamingVideoCard key={eachItem.id} gamingDetails={eachItem} />
        ))}
      </VideoDetailsList>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeandVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f1f5f9'
          const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
          return (
            <>
              <Header />
              <NavigationBar />
              <GamingVideoContainer bgColor={bgColor}>
                <GamingVideoTitle>
                  <GamingTitleContainer>
                    <SiYoutubegaming size={35} color="#ff0b37" />
                  </GamingTitleContainer>
                  <GamingText headingColor={headingColor}>Gaming</GamingText>
                </GamingVideoTitle>
                {this.renderVideos()}
              </GamingVideoContainer>
            </>
          )
        }}
      </ThemeandVideoContext.Consumer>
    )
  }
}

export default Gaming
