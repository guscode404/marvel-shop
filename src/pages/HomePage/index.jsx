import { useContext, useEffect, useState } from "react";
import { ComicList } from "../../components/ComicList"
import { MainContainer } from "../../components/MainContainer"
import { Section } from "../../components/Section"
import { ComicContext } from "../../providers/ComicContext";

export const HomePage = () => {
    const [page, setPage] = useState(1);
    const { comicList, getComicList } = useContext(ComicContext);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const execute = async () => {
        await getComicList();
        setLoaded(true);
      }
      
      execute();
    }, [])

    return (
        <MainContainer>
            <Section>
              { loaded ?
                <ComicList page={page} setPage={setPage} list={comicList} /> :
                <h1>Carregando...</h1> }
            </Section>
        </MainContainer>
    )
}