import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;
  width: 240px;
  height: 60px;
`

export const InnerLayout = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const Element = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.color.main100};
  font-size: ${({ theme }) => theme.fontSize.body};

  text-shadow: none;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
  }
`
