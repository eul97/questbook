import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 1720px;
  min-height: 100vh;
  overflow: auto;
`

export const BackGround = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  gap: 20px;

  background: radial-gradient(
    ${({ theme }) => theme.color.backgroundStart} 0%,
    ${({ theme }) => theme.color.gray100} 100%
  );
  background-color: ${({ theme }) => theme.color.gray100};
`

export const MainFrameLayout = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: 1180px;
  min-width: 1400px;

  align-items: center;
  justify-content: center;

  // background: radial-gradient(
  //   ${({ theme }) => theme.color.backgroundStart} 0%,
  //   ${({ theme }) => theme.color.gray100} 100%
  // );
  // background-color: ${({ theme }) => theme.color.gray100};

  overflow-y: auto;
`
