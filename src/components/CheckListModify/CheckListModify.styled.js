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

export const InputLayout = styled.div`
  display: flex;
  max-width: 240px;
  min-width: 240px;
  height: 30px;
  min-height: 30px;
`

export const Input = styled.input`
  width: 240px;
  height: 30px;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: 500;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  padding: 8px;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7); /* placeholder 색상 조정 */
  }
`

export const ElementLayout = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  max-width: 260px;
  min-width: 150px;
  height: 30px;
  min-height: 30px;
  align-items: center;

  gap: 8px;

  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 20px 0 rgba(255, 255, 255, 0.7);
    border-radius: 4px;
  }
`

export const Button = styled.button``

export const DeleteIconContainer = styled.div`
  margin-left: 5px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const DeleteIcon = styled.div`
  width: 24px;
  height: 24px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    width: 24px;
    height: 2px;
    background-color: #fff;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`

export const Todo = styled.div`
  display: flex;

  width: 200px;
  height: 30px;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: 500;

  align-items: center;
  text-overflow: ellipsis;
`
