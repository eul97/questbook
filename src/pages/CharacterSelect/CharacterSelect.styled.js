import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  max-width: 1280px;
  min-width: 1280px;
  height: 100%;
`

export const TopLayout = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 10px;
`

export const ListLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 1000px;

  gap: 30px;
  overflow: auto;
`

export const BlurText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title2};
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};

  text-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
`
