import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  background: radial-gradient(
    ${({ theme }) => theme.color.backgroundStart} 0%,
    ${({ theme }) => theme.color.gray100} 100%
  );
  background-color: ${({ theme }) => theme.color.gray100};

  overflow: auto;
`
