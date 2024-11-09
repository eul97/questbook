import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  min-width: 1280px;
  height: 180px;
  min-height: 180px;

  position: relative;
`

export const InnerLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 8px;
  left: 60px;
  gap: 15px;
`

export const TextLayout = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.title3};
`

export const LabelLayout = styled.div`
  display: flex;
  align-items: center;

  padding-left: 15px;
  width: 150px;
  height: 50px;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: 600;

  border-radius: 7px;
  border: 1px solid #a07cdf;

  background-color: rgba(54, 43, 83, 0.5);
  margin-right: 20px;
`

export const InputLayout = styled.input`
  display: flex;
  align-items: center;

  padding-left: 15px;
  width: 150px;
  height: 50px;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: 600;

  border-radius: 7px;
  border: 1px solid #a07cdf;

  background-color: rgba(54, 43, 83, 0.5);
  margin-right: 20px;
`

export const Button = styled.button`
  width: 120px;
  height: 50px;

  border: 1px solid ${({ theme }) => theme.color.main100};
  border-radius: 3px;

  background-color: ${({ theme }) => theme.color.main100};

  color: ${({ theme }) => theme.color.gray300};
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: 600;
  cursor: pointer;
`
