import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const GamingList = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
  background: none;
  @media screen and (min-width: 768px) {
    flext-direction: column;
    margin-left: 40px;
  }
`
export const Gamingimg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const GamingStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const GamingTitle = styled.p`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 0px;
`
export const TrendingName = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  font-size: 13px;
  margin-bottom: 0px;
`
export const GamingDateAndView = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  font-size: 12px;
`
export const TrendingProfileImgUrl = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px;
  border-radius: 50px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 50px;
`
