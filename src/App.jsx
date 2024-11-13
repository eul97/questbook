import { BackGround, Layout, MainFrameLayout } from './App.styled'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import GlobalStyle from './styles/global'
import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import {
  CharacterAdd,
  CharacterDetail,
  CharacterModify,
  CharacterSelect,
  Home,
  Login,
  SignUp,
} from 'src/pages'
import { BottomFrame, TopFrame } from 'src/frames'
import { Advertisement } from 'src/components'

function App() {
  const [loginState, setLoginState] = useState(sessionStorage.getItem('loginState') !== null)
  console.log(process.env.LEFT_AD_UNIT)
  const display = () => (
    <Layout>
      <TopFrame loginState={loginState} setLoginState={setLoginState} />
      <BackGround>
        <Advertisement width={'160'} height={'800'} unit={'DAN-mbluKJjJLEMGgH0Q'} />
        <MainFrameLayout>
          <Routes>
            <Route
              path={'/'}
              element={<Home loginState={loginState} setLoginState={setLoginState} />}
            />
            <Route
              path="/login"
              element={<Login loginState={loginState} setLoginState={setLoginState} />}
            />
            <Route
              path="/signUp"
              element={<SignUp loginState={loginState} setLoginState={setLoginState} />}
            />
            <Route
              path="/character"
              element={<CharacterSelect loginState={loginState} setLoginState={setLoginState} />}
            />
            <Route
              path="/detail"
              element={<CharacterDetail loginState={loginState} setLoginState={setLoginState} />}
            />
            <Route
              path="/modify"
              element={<CharacterModify loginState={loginState} setLoginState={setLoginState} />}
            />
            <Route
              path="/add"
              element={<CharacterAdd loginState={loginState} setLoginState={setLoginState} />}
            />
          </Routes>
          <BottomFrame />
        </MainFrameLayout>
        <Advertisement width={'160'} height={'800'} unit={'DAN-J972YYwgN2D2uElc'} />
      </BackGround>
    </Layout>
  )

  return (
    <HashRouter>
      <Layout>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          {display()}
        </ThemeProvider>
      </Layout>
    </HashRouter>
  )
}

export default App
