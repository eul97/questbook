import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  width: 380px;
  height: 60px;

  justify-content: center;
`
export const InputField = styled.input`
  width: 380px;
  height: 60px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.gray100};
  font-size: ${({ theme }) => theme.fontSize.body};

  border: 1px solid ${({ theme }) => theme.color.main100};
  border-radius: 3px;
  color: ${({ theme }) => theme.color.gray400};

  margin-top: ${props => props.marginTop || '20px'};
  margin-bottom: ${props => props.marginBottom || '0px'};

  ::placeholder {
    padding: 10px;
    color: ${({ theme }) => theme.color.gray300};
  }
`
