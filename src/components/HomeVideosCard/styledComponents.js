import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const HomeVideosList = styled.li`
  display: flex;
  flex-direction: column;
  align-self: center;
  background: none;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 310px;
    margin-right: 20px;
  }
`
export const ThumbnailImg = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 5px;
  border-radius: 50px;
`
export const VideoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: -7px;
  padding: 1px;
  margin-left: 2px;
`
export const VideoTitle = styled.p`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 15px;
`
export const ChannelName = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: -7px;
`
export const ViewsAndDate = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: -7px;
`
