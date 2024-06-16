import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {
  NavBar,
  NavigationContainer,
  NavOption,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactImg,
  ContactNote,
  NavigationSmallContainer,
} from './styledComponents'

class NavigationBar extends Component {
  renderNavigationItems = () => (
    <ThemeandVideoContext.Consumer>
      {value => {
        const {changeTab, activeTab, isDarkTheme} = value

        const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
        const activeTabBg = isDarkTheme ? '#383838' : '#cbd5e1'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        const onClickHomeTab = () => {
          changeTab('Home')
        }

        const onClickTrendingTab = () => {
          changeTab('Trending')
        }

        const onClickGamingTab = () => {
          changeTab('Gaming')
        }

        const onClickSavedTab = () => {
          changeTab('Saved')
        }

        return (
          <NavBar>
            <NavigationContainer bgColor={bgColor}>
              <NavOption>
                <NavLink to="/">
                  <NavLinkContainer
                    key="Home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickHomeTab}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavText textColor={textColor}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/trending">
                  <NavLinkContainer
                    key="Trending"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTrendingTab}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavText textColor={textColor}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/gaming">
                  <NavLinkContainer
                    key="Gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickGamingTab}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavText textColor={textColor}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/saved-videos">
                  <NavLinkContainer
                    key="Saved"
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickSavedTab}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavText textColor={textColor}>Saved Videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavOption>
              <ContactInfo>
                <ContactHeading textColor={textColor}>
                  CONTACT US
                </ContactHeading>
                <ContactIcons>
                  <ContactImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />

                  <ContactImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />

                  <ContactImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>
                <ContactNote textColor={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactInfo>
            </NavigationContainer>
            <NavigationSmallContainer bgColor={bgColor}>
              <NavLink to="/">
                <AiFillHome
                  size={30}
                  onClick={onClickHomeTab}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </NavLink>

              <NavLink to="/trending">
                <HiFire
                  size={30}
                  onClick={onClickTrendingTab}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </NavLink>

              <NavLink to="/gaming">
                <SiYoutubegaming
                  size={30}
                  onClick={onClickGamingTab}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </NavLink>

              <NavLink to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  onClick={onClickSavedTab}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
            </NavigationSmallContainer>
          </NavBar>
        )
      }}
    </ThemeandVideoContext.Consumer>
  )

  render() {
    return <> {this.renderNavigationItems()} </>
  }
}

export default NavigationBar
