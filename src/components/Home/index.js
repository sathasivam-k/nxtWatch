import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import Header from '../Header'
import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'
import NavigationBar from '../NavigationBar'

import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {
  LoaderContainer,
  SearchInput,
  SearchContainer,
  SearchIconContainer,
  HomeVideosContainer,
  HomeVideosAndSearchContainer,
  BannerLeftPart,
  BannerRightPart,
  BannerCloseBtn,
  Bannerimg,
  BannerText,
  BannerButton,
  BannerContainer,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    homeVideos: [],
    searchInput: '',
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  getSearchResult = () => {
    this.getVideos()
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderLoaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#7cfc00" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderSuccessView = () => {
    const {homeVideos} = this.state
    return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderHomeVideos = () => {
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
    const {searchInput, bannerDisplay} = this.state
    return (
      <ThemeandVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'
          const textColor = '#231f20'
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f1f5f9'
          return (
            <>
              <Header />
              <NavigationBar />
              <HomeVideosAndSearchContainer
                bgColor={bgColor}
                data-testid="home"
              >
                <BannerContainer display={display} data-testid="banner">
                  <BannerLeftPart>
                    <Bannerimg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText>
                      Buy Nxt Watch Premium prepaid plans with <br /> UPI
                    </BannerText>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerLeftPart>
                  <BannerRightPart>
                    <BannerCloseBtn
                      data-testid="close"
                      onClick={this.onCloseBanner}
                    >
                      <AiOutlineClose size={25} />
                    </BannerCloseBtn>
                  </BannerRightPart>
                </BannerContainer>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    value={searchInput}
                    placeholder="Search"
                    onChange={this.onSearchInput}
                    textColor={textColor}
                  />
                  <SearchIconContainer
                    data-testid="searchButton"
                    onClick={this.getSearchResult}
                  >
                    <AiOutlineSearch size={20} />
                  </SearchIconContainer>
                </SearchContainer>
                <HomeVideosContainer bgColor={bgColor}>
                  {this.renderHomeVideos()}
                </HomeVideosContainer>
              </HomeVideosAndSearchContainer>
            </>
          )
        }}
      </ThemeandVideoContext.Consumer>
    )
  }
}

export default Home
