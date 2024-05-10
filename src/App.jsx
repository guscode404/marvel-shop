import { useState } from 'react'
import { GlobalStyle } from './global-styles/globalstyle'
import { MainContainer } from './components/MainContainer'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <p>test</p>
      </MainContainer>
    </>
  )
}

export default App
