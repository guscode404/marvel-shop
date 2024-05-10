import { useEffect, useState } from 'react'
import { GlobalStyle } from './global-styles/globalstyle'
import { MainContainer } from './components/MainContainer'
import { Header } from './components/Header'
import { api } from './services/api'
import { apiKey } from '../api-key'
import { ComicList } from './components/ComicList'

function App() {
  const [page, setPage] = useState(1);
  const [comicList, setComicList] = useState([]);

  useEffect(() => {
    const getComics = async () => {
      const { data } = await api.get(`/comics?apikey=${apiKey}`);
      setComicList(data.data.results)
      console.log(comicList);
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
        <ComicList page={page} list={comicList} />
      </MainContainer>
    </>
  )
}

export default App
