import { createContext, useEffect, useState } from "react";
import { apiKey } from "../../api-key";
import { api } from "../services/api";

export const ComicContext = createContext({});

export const ComicProvider = ({ children }) => {
    const [comicList, setComicList] = useState([]);

    const getComicList = async () => {
        if(!localStorage.getItem("comicList")) {
            console.log("oi");
            const { data } = await api.get(`/comics?apikey=${apiKey}`);
            const list = data.data.results;
            setComicList(list);
            localStorage.setItem("comicList", JSON.stringify(list));
        } else {
            setComicList(JSON.parse(localStorage.getItem("comicList")))
        }
    }

    return(
        <ComicContext.Provider value={{ comicList, getComicList }}>
            {children}
        </ComicContext.Provider>
    )
}