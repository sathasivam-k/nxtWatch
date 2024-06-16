import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  margin-bottom: 5px;
`
export const FailureViewImg = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailureViewHeading = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 25px;
  text-align: center;
`
export const FailureViewNote = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
`
export const FailureViewButton = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 3px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`
