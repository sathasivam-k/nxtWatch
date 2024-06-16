import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {
  NotFountImageContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundNote,
  NotFoundVideoView,
} from './styledComponents'

const NotFound = () => (
  <ThemeandVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f1f5f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
      return (
        <>
          <Header />
          <NavigationBar />
          <NotFountImageContainer bgColor={bgColor}>
            <NotFoundVideoView>
              <NotFoundImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
              <NotFoundHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundNote noteColor={noteColor}>
                we are sorry, the page you requested could not be found.
              </NotFoundNote>
            </NotFoundVideoView>
          </NotFountImageContainer>
        </>
      )
    }}
  </ThemeandVideoContext.Consumer>
)

export default NotFound
