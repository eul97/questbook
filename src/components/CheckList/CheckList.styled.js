import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;

  width: 400px;
  min-width: 400px;
  position: relative;
`

export const Title = styled.div`
  display: flex;
  position: absolute;

  top: 50px;
  left: 20px;

  width: 260px;
  height: 45px;

  align-items: center;
  padding-left: 40px;

  color: ${({ theme }) => theme.color.gray200};
  font-size: ${({ theme }) => theme.fontSize.title2};
  font-weight: 800;

  background-color: ${({ theme }) => theme.color.gray300};
  border-radius: 3px;

  box-shadow: 20px 10px 0 0 rgba(227, 218, 240, 0.43);
`

export const Progress = styled.div`
  display: flex;
  width: 80px;
  height: 30px;

  align-items: center;
  justify-content: center;

  position: absolute;
  left: 180px;
  top: 60px;

  color: ${({ theme }) => theme.color.gray200};
  font-size: ${({ theme }) => theme.fontSize.title3};
`

export const ListLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  min-width: 300px;
  height: 480px;
  min-height: 480px;

  overflow: auto;
  position: absolute;
  top: 120px;
  left: 50px;
  gap: 10px;
`

export const ElementLayout = styled.div`
  display: flex;
  flex-direction: row;

  max-width: 260px;
  min-width: 150px;
  height: 26px;
  min-height: 26px;
  align-items: center;

  gap: 8px;

  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 20px 0 rgba(255, 255, 255, 0.7);
    border-radius: 4px;
  }
`

export const CheckBox = styled.div`
  margin-left: 5px;
  width: 18px;
  height: 18px;

  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 3px;
  box-shadow: inset 0 0 1px 0 rgba(255, 255, 255, 0.7);
  background-color: ${props => (props.checked ? '#FFFCFF' : 'transparent')};
`

export const Todo = styled.div`
  display: flex;

  width: 200px;
  height: 24px;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: 500;

  align-items: center;
  text-overflow: ellipsis;
`
