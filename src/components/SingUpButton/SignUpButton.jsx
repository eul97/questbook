import { ReactComponent as SignUpButtonNormal } from 'src/assets/signUpButton.svg'
import { ReactComponent as SignUpButtonHover } from 'src/assets/signUpButtonHover.svg'
import { useState } from 'react'
import { Layout } from 'src/components/SingUpButton/SignUpButton.styled'

const SignUpButton = props => {
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
      {isHover ? <SignUpButtonHover /> : <SignUpButtonNormal />}
    </Layout>
  )
}

export default SignUpButton
