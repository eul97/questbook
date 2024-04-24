import { Layout } from './App.styled'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import GlobalStyle from './styles/global'
import TopFrame from 'src/frames/TopFrame'
import MainFrame from 'src/frames/MainFrame'

function App() {
  return (
    <Layout>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <TopFrame />
        <MainFrame />
      </ThemeProvider>
    </Layout>
  )
}

export default App
