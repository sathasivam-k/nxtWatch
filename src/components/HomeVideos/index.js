import HomeVideosCard from '../HomeVideosCard'
import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {
  HomeVideosUlContainer,
  NovideosContainer,
  NoVideoImg,
  NoVideoHeading,
  NoVideoNote,
  RetryButton,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length
  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeandVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <HomeVideosUlContainer>
            {homeVideos.map(eachVideo => (
              <HomeVideosCard key={eachVideo.id} videosDetails={eachVideo} />
            ))}
          </HomeVideosUlContainer>
        ) : (
          <NovideosContainer>
            <NoVideoImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideoHeading headingColor={headingColor}>
              No Search results found
            </NoVideoHeading>
            <NoVideoNote noteColor={noteColor}>
              Try different key words or remove search filter
            </NoVideoNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NovideosContainer>
        )
      }}
    </ThemeandVideoContext.Consumer>
  )
}
export default HomeVideos
