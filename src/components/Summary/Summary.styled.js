import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  min-width: 1280px;
  height: 300px;
  min-height: 300px;

  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.color.main100};

  box-shadow: inset 0 0 20px 0 rgba(255, 255, 255, 0.35);

  cursor: ${props => (props.type === 'select' ? 'pointer' : 'default')};
`

export const ImageLayout = styled.div`
  display: flex;

  width: 380px;
  min-width: 380px;
  height: 100%;

  position: relative;

  border-right-color: ${({ theme }) => theme.color.main100};
  border-right-width: 1px;
  border-right-style: solid;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
`

export const ImageDividerLayout = styled.div`
  position: absolute;

  left: 285px;
`

export const InfoLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  min-width: 720px;

  position: relative;
`

export const ThumbnailLayout = styled.div`
  display: flex;
  position: absolute;

  width: 100%;
  height: 100%;
`

export const Name = styled.div`
  display: flex;
  position: absolute;

  top: 200px;
  left: 60px;

  width: 260px;
  height: 45px;

  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.color.gray200};
  font-size: ${({ theme }) => theme.fontSize.title2};
  font-weight: 800;

  background-color: ${({ theme }) => theme.color.gray300};
  border-radius: 3px;

  box-shadow: 20px 10px 0 0 rgba(227, 218, 240, 0.33);
  z-index: 999;
`

export const Detail = styled.div`
  display: flex;

  font-size: ${({ theme }) => theme.fontSize.body};
  color: ${({ theme }) => theme.color.white};

  justify-content: center;
  align-items: center;

  position: absolute;
  top: 10px;
  left: 50px;
`

export const DividerLayout = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`

export const ProgressBarLayout = styled.div`
  display: flex;
  position: absolute;
  top: 80px;
  left: 30px;
`
