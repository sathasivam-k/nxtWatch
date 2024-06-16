import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {
  GamingList,
  Gamingimg,
  GamingStatusContainer,
  GamingTitle,
  GamingDateAndView,
  TrendingProfileImgUrl,
  TrendingName,
  TrendingDot,
  VideoLink,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails
  return (
    <ThemeandVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'

        return (
          <VideoLink to={`/videos/${id}`}>
            <GamingList>
              <Gamingimg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingProfileImgUrl src={profileImageUrl} alt="channel logo" />
              <GamingStatusContainer>
                <GamingTitle headingColor={headingColor}>{title}</GamingTitle>
                <TrendingName noteColor={noteColor}>{name}</TrendingName>
                <GamingDateAndView noteColor={noteColor}>
                  {viewCount} views <TrendingDot> &#8226; </TrendingDot>{' '}
                  {publishedAt}
                </GamingDateAndView>
              </GamingStatusContainer>
            </GamingList>
          </VideoLink>
        )
      }}
    </ThemeandVideoContext.Consumer>
  )
}
export default TrendingVideoCard
