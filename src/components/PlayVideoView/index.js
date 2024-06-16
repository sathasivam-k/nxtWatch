import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeandVideoContext from '../../context/ThemeandVideoContext'

import {
  VideoPlayer,
  VideoTitle,
  PlayVideoStatusContainer,
  PlayVideoStatus,
  PlayVideoDot,
  PlaySocialButtonContainer,
  ButtonContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelContainer,
  ChannelLogo,
  ChannelInfo,
  ChannelTitle,
  ChannelDescription,
  ChannelSubscribers,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, clickDisliked, clickLiked, isDisLiked, isLiked} = props

  const onClickLike = () => {
    clickLiked()
  }
  const onClicDisLike = () => {
    clickDisliked()
  }

  return (
    <ThemeandVideoContext.Consumer>
      {value => {
        const {addVideo, savedVideos, isDarkTheme} = value
        const textColor = isDarkTheme ? '#ffffff' : '#231f20'
        let isSaved
        const index = savedVideos.findIndex(
          eachItem => eachItem.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <VideoTitle textColor={textColor}>{videoDetails.title}</VideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus textColor={textColor}>
                {videoDetails.viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {videoDetails.publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonContainer>
                <ButtonContainer>
                  <SocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : textColor}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText>Like</ButtonText>
                  </SocialButton>
                </ButtonContainer>

                <ButtonContainer>
                  <SocialButton
                    type="button"
                    onClick={onClicDisLike}
                    color={isDisLiked ? '#2563eb' : textColor}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText>Dislike</ButtonText>
                  </SocialButton>
                </ButtonContainer>

                <ButtonContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickSave}
                    color={saveIconColor}
                  >
                    <BiListPlus size={25} />
                    <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </ButtonContainer>
              </PlaySocialButtonContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelLogo
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelTitle textColor={textColor}>
                  {videoDetails.name}
                </ChannelTitle>
                <ChannelSubscribers textColor={textColor}>
                  {videoDetails.subscriberCount}
                </ChannelSubscribers>
                <ChannelDescription textColor={textColor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeandVideoContext.Consumer>
  )
}

export default PlayVideoView
