import { GlobalStyle } from './global-styles/globalstyle'
import { Header } from './components/Header'
import { RoutesMain } from './routes/RoutesMain'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RoutesMain />
    </>
  )
}

export default App
