import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
  height: 60px;
  width: 100%;
  padding: 10px;
  position: fixed;
  top: 0;
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const HeaderLogoImg = styled.img`
  width: 90px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 40px;
  }
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10x;
`
export const LogoutBtn = styled.button`
  color: ${props => props.color};
  border-color: ${props => props.color};
  background-color: ${props => props.bgColor};
  border: 1px solid;
  margin-left: 15px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  weight: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 28px;
  @media screen and (min-width: 768px) {
    height: 200px;
    weight: 400px;
  }
`
export const ModalDesc = styled.p`
  margin: 10px;
  color: #000000;
  text-align: center;
  font-family: 'Roboto';
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  color: grey;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'Roboto';
  font-size: 12px;
  margin: 10px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-left: 50px;
    padding-right: 50px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  color: white;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-left: 50px;
    padding-right: 50px;
  }
`
export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoutIconBtn = styled.div`
  background: none;
  border: none;
  margin-left: 15px;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
