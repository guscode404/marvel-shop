import { useEffect, useState } from "react";
import { ComicList } from "../components/ComicList"
import { MainContainer } from "../components/MainContainer"
import { Section } from "../components/Section"
import { api } from "../services/api";
import { apiKey } from "../../api-key";

export const HomePage = () => {
    const [page, setPage] = useState(1);
    const [comicList, setComicList] = useState([]);
  
    useEffect(() => {
      const getComics = async () => {
        const { data } = await api.get(`/comics?apikey=${apiKey}`);
        const list = data.data.results;
        setComicList(list)
      }
      getComics();
    }, [])

    return (
        <MainContainer>
            <Section>
                <ComicList page={page} setPage={setPage} list={comicList} />
            </Section>
        </MainContainer>
    )
}