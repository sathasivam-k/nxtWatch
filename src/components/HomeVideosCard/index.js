import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {
  HomeVideosList,
  ThumbnailImg,
  VideoDetailsContainer,
  ProfileImg,
  VideoTitleContainer,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
  VideoLink,
} from './styledComponents'

const HomeVideosCard = props => {
  const {videosDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videosDetails

  return (
    <ThemeandVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        return (
          <VideoLink to={`/videos/${id}`}>
            <HomeVideosList>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <VideoTitleContainer>
                  <VideoTitle headingColor={headingColor}>{title}</VideoTitle>
                  <ChannelName noteColor={noteColor}>{name}</ChannelName>
                  <ViewsAndDate noteColor={noteColor}>
                    {viewCount} views {publishedAt}
                  </ViewsAndDate>
                </VideoTitleContainer>
              </VideoDetailsContainer>
            </HomeVideosList>
          </VideoLink>
        )
      }}
    </ThemeandVideoContext.Consumer>
  )
}

export default HomeVideosCard
