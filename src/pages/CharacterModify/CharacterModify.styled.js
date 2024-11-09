import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  max-width: 1280px;
  min-width: 1280px;

  gap: 30px;

  align-items: center;
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
  padding-right: 180px;
`

export const Divider = styled.div`
  width: 1180px;
  height: 2px;
  margin-top: 20px;
  margin-right: 180px;

  border: 1px solid #a07cdf;
`

export const ConfirmButtonLayout = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  width: 1180px;
  min-width: 1180px;
  margin-right: 200px;
  height: 100px;
  min-height: 100px;

  gap: 20px;
`
