import styled from 'styled-components'

export const BackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  min-height: 200px;

  background-color: ${({ theme }) => theme.color.background};
`

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;

  gap: 20px;
`

export const Layout = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  width: 1280px;
  min-width: 1280px;
`
