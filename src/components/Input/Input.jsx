import { InputField } from 'src/components/Input/Input.styled'

const Input = props => {
  return (
    <InputField
      placeholder={props.placeholder}
      type={props.type}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
    />
  )
}

export default Input
