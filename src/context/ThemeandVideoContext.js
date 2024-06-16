import React from 'react'

const ThemeandVideoContext = React.createContext({
  savedVideos: [],
  activeTab: 'Home',
  isDarkTheme: false,
  changeTab: () => {},
  addVideo: () => {},
  removeVideo: () => {},
  toggleTheme: () => {},
})

export default ThemeandVideoContext
