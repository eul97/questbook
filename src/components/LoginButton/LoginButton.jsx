import { ReactComponent as LoginButtonHover } from 'src/assets/loginButtonHover.svg'
import { ReactComponent as LoginButtonNormal } from 'src/assets/loginButton.svg'
import { useState } from 'react'
import { Layout } from 'src/components/LoginButton/LoginButton.styled'

const LoginButton = props => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Layout
      onMouseOver={() => {
        setIsHover(true)
      }}
      onMouseOut={() => {
        setIsHover(false)
      }}
      onClick={props.onClick}
    >
      {isHover ? <LoginButtonHover /> : <LoginButtonNormal />}
    </Layout>
  )
}

export default LoginButton
