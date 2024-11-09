import { BackGround, Layout, MainFrameLayout } from './App.styled'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import GlobalStyle from './styles/global'
import TopFrame from 'src/frames/TopFrame'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  CharacterAdd,
  CharacterDetail,
  CharacterModify,
  CharacterSelect,
  Login,
  SignUp,
} from 'src/pages'
import { BottomFrame } from 'src/frames'

function App() {
  const [loginState, setLoginState] = useState(sessionStorage.getItem('loginState') || 'false')

  const display = () => (
    <Layout>
      <TopFrame loginState={loginState} setLoginState={setLoginState} />
      <BackGround>
        <MainFrameLayout>
          <Routes>
            <Route
              path={'/'}
              element={<Login loginState={loginState} setLoginState={setLoginState} />}
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
        </MainFrameLayout>
        <BottomFrame />
      </BackGround>
    </Layout>
  )

  return (
    <BrowserRouter>
      <Layout>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          {display()}
        </ThemeProvider>
      </Layout>
    </BrowserRouter>
  )
}

export default App
