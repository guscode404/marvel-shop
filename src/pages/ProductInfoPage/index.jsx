import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { apiKey } from "../../../api-key";
import { Section } from "../../components/Section";
import { InfoLayout } from "../../components/InfoLayout";
import { MainContainer } from "../../components/MainContainer";

export const ProductInfoPage = () => {
    const { id } = useParams();
    const [comic, setComic] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getComic = async () => {
            const { data } = await api.get(`/comics/${id}?apikey=${apiKey}`);
            setComic(data.data.results[0]);
            setLoaded(true);
        }

        getComic();
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