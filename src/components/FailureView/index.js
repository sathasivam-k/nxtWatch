import ThemeandVideoContext from '../../context/ThemeandVideoContext'
import {
  FailureViewContainer,
  FailureViewImg,
  FailureViewHeading,
  FailureViewNote,
  FailureViewButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }
  return (
    <ThemeandVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureViewImg src={failureImgUrl} alt="failure view" />
            <FailureViewHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewNote noteColor={noteColor}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewNote>
            <FailureViewButton type="button" onClick={onClickRetry}>
              Retry
            </FailureViewButton>
          </FailureViewContainer>
        )
      }}
    </ThemeandVideoContext.Consumer>
  )
}
export default FailureView
