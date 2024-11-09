import { ReactComponent as LogoutButtonNormal } from 'src/assets/logoutButton.svg'
import { ReactComponent as LogoutButtonHover } from 'src/assets/logoutButtonHover.svg'
import { useState } from 'react'
import { Layout } from 'src/components/SingUpButton/SignUpButton.styled'

const LogoutButton = props => {
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
      {isHover ? <LogoutButtonHover /> : <LogoutButtonNormal />}
    </Layout>
  )
}

export default LogoutButton
