import { BlurText, BorderLayout, Button, ContentLayout, Layout } from 'src/pages/Login/Login.styled'
import { ReactComponent as Border } from 'src/assets/border.svg'
import { Input } from 'src/components'
import { useEffect, useState } from 'react'
import { login } from 'src/api/accountAPI'
import { useNavigate } from 'react-router-dom'
import { getAuthorization } from 'src/api/commonAPI'

const Login = props => {
  const [inputEmailField, setInputEmailField] = useState('')
  const [inputPasswordField, setInputPasswordField] = useState('')
  const navigate = useNavigate()
  let loginToken = null

  useEffect(() => {
    loginToken = getAuthorization()
    if (loginToken === null) {
      props.setLoginState(false)
    } else {
      props.setLoginState(true)
      navigate('/character')
    }
  }, [])

  const onClickLoginButton = () => {
    //TODO: 세부 이메일 조건 확인
    if (inputEmailField === '' || inputEmailField === null) {
      alert('이메일을 입력하세요')
      return
    }
    if (inputPasswordField === '' || inputPasswordField === null) {
      alert('비밀번호를 입력하세요')
      return
    }
    login(inputEmailField, inputPasswordField)
      .then(data => {
        alert('성공적으로 로그인되었습니다.')
        sessionStorage.setItem('loginToken', data.accessToken)
        sessionStorage.setItem('loginState', true)
        props.setLoginState(true)
        navigate('/character')
      })
      .catch(error => {
        console.log(error)
        if (error.response.data.code === 'INCORRECT_EMAIL') {
          alert('존재하지 않는 이메일입니다.')
        } else {
          alert('비밀번호가 올바르지 않습니다.')
        }
      })
  }

  const onPressEnterOnPasswordField = event => {
    if (event.key === 'Enter') {
      onClickLoginButton()
    }
  }

  return (
    <Layout>
      <BorderLayout>
        <Border />
      </BorderLayout>
      <ContentLayout>
        <BlurText>로그인</BlurText>
        <Input
          placeholder="이메일"
          value={inputEmailField}
          onChange={e => setInputEmailField(e.target.value)}
          maxLength={50}
        />
        <Input
          placeholder="비밀번호"
          type={'password'}
          value={inputPasswordField}
          onChange={e => setInputPasswordField(e.target.value)}
          onKeyDown={onPressEnterOnPasswordField}
          maxLength={30}
        />
        <Button onClick={onClickLoginButton}>로그인</Button>
        {/*<LabelLayout>*/}
        {/*  <LinkLabel>아이디 찾기</LinkLabel>|<LinkLabel>비밀번호 찾기</LinkLabel>|*/}
        {/*  <LinkLabel>회원 가입</LinkLabel>*/}
        {/*</LabelLayout>*/}
      </ContentLayout>
    </Layout>
  )
}
export default Login
