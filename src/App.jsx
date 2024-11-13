import { BackGround, Layout, MainFrameLayout } from './App.styled'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import GlobalStyle from './styles/global'
import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { CharacterAdd, CharacterDetail, CharacterModify, CharacterSelect, Home, Login, SignUp } from 'src/pages'
import { BottomFrame, TopFrame } from 'src/frames'

// function CheckBatch() {
//   const navigate = useNavigate()
//
//   useEffect(() => {
//     const checkDayEnd = () => {
//       const now = new Date()
//       const currentHourKST = (now.getUTCHours() + 9) % 24
//       const currentMinutes = now.getUTCMinutes()
//       console.log(`checkDayEnd 호출 ! 현재시각 : ${currentHourKST}시 ${currentMinutes}분`)
//
//       if (currentHourKST >= 20 && currentMinutes >= 0) {
//         alert('현재 서버 점검으로 접속이 불가능합니다.\n(매일 23:50 ~ 24:00 정기점검)')
//         navigate('/')
//       }
//     }
//
//     checkDayEnd()
//     const interval = setInterval(checkDayEnd, 1000 * 60) // 1분마다 검사
//
//     return () => clearInterval(interval)
//   }, [navigate])
//
//   return null
// }

function App() {
  const [loginState, setLoginState] = useState(sessionStorage.getItem('loginState') !== null)

  const display = () => (
    <Layout>
      <TopFrame loginState={loginState} setLoginState={setLoginState} />
      <BackGround>
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
