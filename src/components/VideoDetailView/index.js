import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import PlayVideoView from '../PlayVideoView'
import FailureView from '../FailureView'
import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {VideoDetailContainerView, LoaderContainer} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailView extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videoDetails: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideos()
  }

  formatedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    subscriberCount: data.video_details.channel.subscriber_count,
    description: data.video_details.description,
  })

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const updatedData = this.formatedData(data)
      // console.log(updatedData)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisliked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
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
    const {videoDetails, isDisLiked, isLiked} = this.state
    return (
      <PlayVideoView
        videoDetails={videoDetails}
        clickDisliked={this.clickDisliked}
        clickLiked={this.clickLiked}
        isDisLiked={isDisLiked}
        isLiked={isLiked}
      />
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
          return (
            <>
              <Header />
              <NavigationBar />
              <VideoDetailContainerView
                bgColor={bgColor}
                data-testid="videoItemDetails"
              >
                {this.renderVideos()}
              </VideoDetailContainerView>
            </>
          )
        }}
      </ThemeandVideoContext.Consumer>
    )
  }
}

export default VideoDetailView
