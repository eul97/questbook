import { Layout } from 'src/components/SingleButton/SingleButton.styled'
import { ReactComponent as ConfirmButtonHover } from 'src/assets/confirmButtonHover.svg'
import { ReactComponent as CancelButtonHover } from 'src/assets/cancelButtonHover.svg'
import { ReactComponent as ConfirmButtonNormal } from 'src/assets/confirmButtonNormal.svg'
import { ReactComponent as CancelButtonNormal } from 'src/assets/cancelButtonNormal.svg'
import { useState } from 'react'

const SingleButton = props => {
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
      {props.type === 'cancel' && isHover && <CancelButtonHover />}
      {props.type === 'cancel' && !isHover && <CancelButtonNormal />}
      {props.type === 'confirm' && isHover && <ConfirmButtonHover />}
      {props.type === 'confirm' && !isHover && <ConfirmButtonNormal />}
    </Layout>
  )
}

export default SingleButton
