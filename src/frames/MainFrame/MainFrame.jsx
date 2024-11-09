import { Layout } from 'src/frames/MainFrame/MainFrame.styled'
import { CharacterDetail, CharacterModify, CharacterSelect, Login, SignUp } from 'src/pages'

const MainFrame = props => {
  const setLoginState = loginState => {
    props.setLoginState(loginState)
  }

  const onClickAddCharacterButton = () => {}

  const display = () => {
    if (props.page === 'login') {
      return <Login setLoginState={setLoginState} />
    } else if (props.page === 'signUp') {
      return <SignUp />
    } else if (props.page === 'characterSelect' && props.loginState) {
      return <CharacterSelect />
    } else if (props.page === 'characterModify' && props.loginState) {
      return <CharacterModify />
    } else if (props.page === 'characterDetail' && props.loginState) {
      return <CharacterDetail />
    } else {
      return <Login />
    }
  }

  return <Layout>{display()}</Layout>
}

export default MainFrame
