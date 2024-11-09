import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  position: relative;

  width: 1180px;
  height: 740px;
`

export const BorderLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`

export const ContentLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const RowLayout = styled.div`
  display: flex;
  width: 540px;
  margin-left: 160px;

  align-items: center;
`

export const Button = styled.button`
  width: 380px;
  height: 60px;
  margin-top: 30px;

  border: 1px solid ${({ theme }) => theme.color.main100};
  border-radius: 3px;

  background-color: ${({ theme }) => theme.color.main100};

  color: ${({ theme }) => theme.color.gray300};
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: 600;
  cursor: pointer;
`

export const SmallButton = styled.button`
  width: 120px;
  height: 40px;
  margin-top: 10px;

  margin-left: 20px;
  border: 1px solid ${({ theme }) => theme.color.main100};
  border-radius: 3px;

  background-color: ${({ theme }) => theme.color.main100};

  color: ${({ theme }) => theme.color.gray300};
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: 600;
  cursor: pointer;
`

export const LabelLayout = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  margin-top: 20px;
  width: 380px;
  height: 40px;

  color: ${({ theme }) => theme.color.gray300};
`

export const LinkLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: 600;
  cursor: pointer;
`

export const BlurText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};

  text-shadow: 0 0 20px rgba(255, 255, 255, 0.7);

  margin-bottom: 20px;
`

export const TextLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: 380px;

  margin-top: 30px;
  padding-left: 5px;

  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};

  :disabled {
    color: ${({ theme }) => theme.color.gray300};
  }
`

export const TermsLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 420px;

  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.color.main100};

  box-shadow: inset 0 0 10px 0 rgba(255, 255, 255, 0.15);

  overflow: auto;
`

export const TermsLabel = styled.div`
  display: flex;
  width: 1000px;

  margin-top: 10px;
  padding-left: 40px;
  font-size: ${({ theme }) => theme.fontSize.body};

  font-weight: 400;
  color: ${({ theme }) => theme.color.white};
`

export const TermsTitle = styled.div`
  display: flex;
  width: 1000px;

  margin-top: 20px;
  padding-left: 40px;
  font-size: ${({ theme }) => theme.fontSize.title3};

  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`

export const AgreeLayout = styled.div`
  display: flex;
  width: 1000px;
  margin-top: 30px;

  justify-content: space-between;
`
