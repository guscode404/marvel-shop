import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const ComicContext = createContext({});

export const ComicProvider = ({ children }) => {
    const [comicList, setComicList] = useState([]);

    const getComicList = async () => {
        if(!localStorage.getItem("comicList")) {
            const { data } = await api.get(`/comics?format=comic&formatType=comic&noVariants=false&dateDescriptor=thisMonth&limit=80&apikey=${import.meta.env.VITE_API_KEY}`);
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