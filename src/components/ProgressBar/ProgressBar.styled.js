import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;

  position: relative;

  width: 260px;
  height: 210px;
`

export const InnerLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100%;
  min-height: 100%;

  position: absolute;
  top: 0;
  left: 0;
`
export const ProgressBarLayout = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;

  top: 40px;
  left: 40px;
`

export const TextLayout = styled.div`
  width: 100px;
  height: 30px;

  position: absolute;

  top: 170px;
  left: 180px;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.footNote};
`
