import { BackGround, ButtonLayout, Layout } from 'src/frames/TopFrame/TopFrame.styled'
import { LoginButton, LogoutButton, SignUpButton } from 'src/components'
import { ReactComponent as Logo } from 'src/assets/logo.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from 'src/api/accountAPI'
import { useEffect, useRef } from 'react'

const TopFrame = props => {
  const isUnderBatch = useRef(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const checkMaintenance = () => {
      // 한국 표준시 기준
      const now = new Date()
      const currentHourKST = (now.getUTCHours() + 9) % 24
      const currentMinutes = now.getUTCMinutes()

      if (currentHourKST === 23 && currentMinutes >= 50) {
        if (isUnderBatch.current === false) {
          isUnderBatch.current = true
          alert('현재 서버 점검으로 접속이 불가능합니다.\n(매일 23:50 ~ 24:00 정기점검)')
          props.setLoginState(false)
          sessionStorage.clear()
          navigate('/')
        }
      } else {
        isUnderBatch.current = false
      }
    }

    checkMaintenance()
    const interval = setInterval(checkMaintenance, 1000 * 60)

    return () => clearInterval(interval)
  }, [])

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
    if (isUnderBatch.current === true) {
      alert('현재 서버 점검으로 접속이 불가능합니다.\n(매일 23:50 ~ 24:00 정기점검)')
      return
    }
    location.pathname === '/login' ? navigate(0) : navigate('/login')
  }

  const onClickSignUpButton = () => {
    if (isUnderBatch.current === true) {
      alert('현재 서버 점검으로 접속이 불가능합니다.\n(매일 23:50 ~ 24:00 정기점검)')
      return
    }
    location.pathname === '/signUp' ? navigate(0) : navigate('/signUp')
  }

  const onClickLogo = () => {
    if (isUnderBatch.current) {
      // alert('현재 서버 점검으로 접속이 불가능합니다.\n(매일 23:50 ~ 24:00 정기점검)')
      return
    }
    props.loginState ? navigate('/character') : navigate('/')
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
    <BackGround>
      <Layout>
        <Logo style={{ cursor: 'pointer' }} onClick={onClickLogo} />
        {displayButton}
      </Layout>
    </BackGround>
  )
}

export default TopFrame
