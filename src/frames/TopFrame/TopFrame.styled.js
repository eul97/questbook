import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 200px;
  min-height: 200px;

  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.color.background};
`

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;

  gap: 20px;
`
