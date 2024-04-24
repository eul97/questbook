import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;

  width: 100%;
  min-height: 500px;
  height: 100%;

  background: radial-gradient(
    ${({ theme }) => theme.color.backgroundStart} 0%,
    ${({ theme }) => theme.color.gray100} 100%
  );
  background-color: ${({ theme }) => theme.color.gray100};
`
