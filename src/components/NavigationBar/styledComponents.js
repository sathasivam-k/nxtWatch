import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
`
export const NavigationContainer = styled.div`
  background-color: ${props => props.bgColor};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  top: 60px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavOption = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 0px;
  flex-grow: 1;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`
export const NavText = styled.p`
  color: ${props => props.textColor};
  margin-left: 15px;
  padding-left: 15px;
  font-size: 18px;
  font-family: 'Roboto';
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.p`
  color: ${props => props.textColor};
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImg = styled.img`
  height: 25px;
  weight: 25px;
  margin-right: 10px;
  border-radius: 50px;
`
export const ContactNote = styled.p`
  color: ${props => props.textColor};
  font-size: 18px;
  font-family: 'Roboto';
`
export const NavigationSmallContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 10px;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  align-items: center;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
