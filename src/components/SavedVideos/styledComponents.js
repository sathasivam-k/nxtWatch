import styled from 'styled-components'

export const SavedVideoContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const SavedVideoTitlecontainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const SavedText = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const SavedVideoULlist = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const NoSavedVideoView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoSavedVideoImg = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoSavedVideoHeading = styled.h1`
  color: ${props => props.headingColor};
  text-align: center;
  font-family: 'Roboto';
  font-size: 25px;
`
export const NoSavedVieoNote = styled.p`
  color: ${props => props.noteColor};
  text-align: center;
  font-family: 'Roboto';
  font-size: 18px;
`
