import {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoDetailView from './components/VideoDetailView'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeandVideoContext from './context/ThemeandVideoContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    savedVideos: [],
    activeTab: 'Home',
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachItem => eachItem.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedVideos = savedVideos.filter(eachItem => eachItem.id !== id)
    this.setState({savedVideos: updatedVideos})
  }

  render() {
    const {savedVideos, activeTab, isDarkTheme} = this.state
    return (
      <ThemeandVideoContext.Provider
        value={{
          savedVideos,
          activeTab,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="bad-path" />
        </Switch>
      </ThemeandVideoContext.Provider>
    )
  }
}

export default App
