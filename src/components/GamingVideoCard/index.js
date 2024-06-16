import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {
  GamingList,
  Gamingimg,
  GamingStatusContainer,
  GamingTitle,
  GamingDateAndView,
  VideoLink,
} from './styledComponents'

const GamingVideoCard = props => {
  const {gamingDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gamingDetails
  return (
    <ThemeandVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'

        return (
          <VideoLink to={`/videos/${id}`}>
            <GamingList>
              <Gamingimg src={thumbnailUrl} alt="video thumbnail" />
              <GamingStatusContainer>
                <GamingTitle headingColor={headingColor}>{title}</GamingTitle>
                <GamingDateAndView textColor={textColor}>
                  {viewCount} Watching Worldwide
                </GamingDateAndView>
              </GamingStatusContainer>
            </GamingList>
          </VideoLink>
        )
      }}
    </ThemeandVideoContext.Consumer>
  )
}
export default GamingVideoCard
