import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'
import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {
  SavedVideoContainer,
  SavedVideoTitle,
  SavedVideoTitlecontainer,
  SavedText,
  SavedVideoULlist,
  NoSavedVideoView,
  NoSavedVideoImg,
  NoSavedVideoHeading,
  NoSavedVieoNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeandVideoContext.Consumer>
    {value => {
      const {savedVideos, isDarkTheme} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f1f5f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
      return (
        <>
          <Header />
          <NavigationBar />
          <SavedVideoContainer bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedVideoTitlecontainer>
                <CgPlayListAdd size={30} color="#ff0b37" />
              </SavedVideoTitlecontainer>
              <SavedText headingColor={headingColor}>Saved Videos</SavedText>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <SavedVideoULlist>
                {savedVideos.map(eachItems => (
                  <VideoCard key={eachItems.id} videoDetails={eachItems} />
                ))}
              </SavedVideoULlist>
            ) : (
              <NoSavedVideoView>
                <NoSavedVideoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideoHeading headingColor={headingColor}>
                  No saved videos found
                </NoSavedVideoHeading>
                <NoSavedVieoNote noteColor={noteColor}>
                  Save your videos by clicking a button
                </NoSavedVieoNote>
              </NoSavedVideoView>
            )}
          </SavedVideoContainer>
        </>
      )
    }}
  </ThemeandVideoContext.Consumer>
)

export default SavedVideos
