import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {
  HeaderContainer,
  HeaderLogoImg,
  ProfileImg,
  LogoutBtn,
  ModalContainer,
  ModalDesc,
  CloseButton,
  ConfirmButton,
  ActionContainer,
  ButtonContainer,
  ThemeButton,
  LogoLink,
  LogoutIconBtn,
} from './styledComponents'

const Header = props => (
  <ThemeandVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
      const color = isDarkTheme ? '#ffffff' : '#00306e'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onChangeTheme = () => {
        toggleTheme()
      }

      return (
        <HeaderContainer bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogoImg
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <ActionContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutIconBtn type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIconBtn>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutBtn bgColor={bgColor} color={color} type="button">
                  Logout
                </LogoutBtn>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionContainer>
        </HeaderContainer>
      )
    }}
  </ThemeandVideoContext.Consumer>
)

export default withRouter(Header)
