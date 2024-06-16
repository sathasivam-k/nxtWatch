import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingList = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`
export const Gamingimg = styled.img`
  width: 100vw;
  height: 300px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`
export const GamingStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const GamingTitle = styled.p`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 0px;
`
export const GamingDateAndView = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 12px;
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
