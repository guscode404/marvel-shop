import { useEffect, useState } from 'react'
import { GlobalStyle } from './global-styles/globalstyle'
import { MainContainer } from './components/MainContainer'
import { Header } from './components/Header'
import { api } from './services/api'
import { apiKey } from '../api-key'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const getComics = async () => {
      const { data } = await api.get(`/comics?apikey=${apiKey}`);
      console.log(data.data.results)
    }
    getComics();
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <p>test</p>
        <p>test</p>
      </MainContainer>
    </>
  )
}

export default App
