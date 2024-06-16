import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.textColor};
`
export const PlayVideoStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const PlayVideoStatus = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 12px;
`
export const PlayVideoDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`
export const PlaySocialButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  background: none;
`
export const SocialButton = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: ${props => props.color};
`
export const ButtonText = styled.span`
  margin-left: 5px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const HrLine = styled.hr`
  border: 1px solid #909090;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelTitle = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0px;
`
export const ChannelDescription = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 15px;
`
export const ChannelSubscribers = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 12px;
`
