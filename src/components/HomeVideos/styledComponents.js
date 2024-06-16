import styled from 'styled-components'

export const HomeVideosUlContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const NovideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoVideoImg = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoVideoHeading = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 25px;
`
export const NoVideoNote = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
`
export const RetryButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  background-color: #4f46e5;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
`
