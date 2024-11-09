import { ButtonLayout, Layout } from 'src/frames/TopFrame/TopFrame.styled'
import { LoginButton, LogoutButton, SignUpButton } from 'src/components'
import { ReactComponent as Logo } from 'src/assets/logo.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from 'src/api/accountAPI'

const TopFrame = props => {
  const location = useLocation()
  const navigate = useNavigate()

  const onClickLogoutButton = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      logout(sessionStorage.getItem('loginToken')).then(data => {
        sessionStorage.clear()
        props.setLoginState(false)
        navigate('/')
      })
    }
  }

  const onClickLoginButton = () => {
    location.pathname === '/login' ? navigate(0) : navigate('/login')
  }

  const onClickSignUpButton = () => {
    location.pathname === '/signUp' ? navigate(0) : navigate('/signUp')
  }

  const onClickLogo = () => {
    props.loginState ? navigate('/character') : navigate('/login')
  }

  const displayButton = props.loginState ? (
    <ButtonLayout>
      <LogoutButton onClick={onClickLogoutButton} />
    </ButtonLayout>
  ) : (
    <ButtonLayout>
      <LoginButton onClick={onClickLoginButton} />
      <SignUpButton onClick={onClickSignUpButton} />
    </ButtonLayout>
  )

  // const display = () => {
  //   if (props.loginState) {
  //     return (
  //       <ButtonLayout>
  //         <LogoutButton onClick={onClickLogoutButton} />
  //       </ButtonLayout>
  //     )
  //   } else {
  //     return (
  //       <ButtonLayout>
  //         <LoginButton onClick={onClickLoginButton} />
  //         <SignUpButton onClick={onClickSignUpButton} />
  //       </ButtonLayout>
  //     )
  //   }
  // }

  return (
    <Layout>
      <Logo style={{ cursor: 'pointer' }} onClick={onClickLogo} />
      {displayButton}
    </Layout>
  )
}

export default TopFrame
