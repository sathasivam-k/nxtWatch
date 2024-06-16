import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const SearchInput = styled.input`
  outline: none;
  width: 100%;
  padding: 5px;
  border: none;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  font-size: 18px;
`
export const HomeVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
`
export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  width: 60%;
  height: 40px;
  margin: 20px;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`
export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  border: none;
  background-color: #909090;
`
export const HomeVideosAndSearchContainer = styled.div`
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
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const BannerCloseBtn = styled.button`
  border: none;
  background: none;
  height: 25px;
  cursor: pointer;
`
export const Bannerimg = styled.img`
  width: 100px;
  height: 30px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const BannerButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #000000;
  background: none;
  color: #000000;
`
export const BannerContainer = styled.div`
  display: ${props => props.display};
  background-size: cover;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  height: 200px;
  padding: 20px;
  justify-content: space-between;
`
