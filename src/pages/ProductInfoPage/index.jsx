import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { apiKey } from "../../../api-key";
import { Section } from "../../components/Section";
import { InfoLayout } from "../../components/InfoLayout";
import { MainContainer } from "../../components/MainContainer";
import { ComicContext } from "../../providers/ComicContext";

export const ProductInfoPage = () => {
    const { id } = useParams();
    const { getComicList } = useContext(ComicContext);
    const [ comic, setComic ] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const execute = async () => {
            await getComicList();
            const list = JSON.parse(localStorage.getItem("comicList"))
            setComic(list.filter((currentComic) => currentComic.id === Number(id))[0]);
            setLoaded(true);
        }

        execute();
    }, [])

    return (
        <MainContainer>
            <Section>
                { loaded ?
                    <InfoLayout comic={comic} /> :
                    <h1>Carregando...</h1> }
            </Section>
        </MainContainer>
    )
}