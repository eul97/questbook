import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  max-width: 1380px;
  min-width: 1180px;

  gap: 30px;
`

export const TopLayout = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: baseline;

  width: 100%;

  color: ${({ theme }) => theme.color.gray300};
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: 600;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.7);

  padding-left: 15px;
  padding-right: 10px;
`

export const CheckListLayout = styled.div`
  position: relative;

  width: 100%;
  height: 700px;
  min-height: 700px;
`
