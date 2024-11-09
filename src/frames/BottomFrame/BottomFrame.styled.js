import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;

  width: 100%;
  height: 60px;

  align-items: center;
  justify-content: center;
`

export const Footer = styled.div`
  display: flex;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.footNote};
`
