import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 200px;
  min-height: 180px;

  background-color: ${({ theme }) => theme.color.background};
`
