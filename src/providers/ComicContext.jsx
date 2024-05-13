import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const ComicContext = createContext({});

export const ComicProvider = ({ children }) => {
    const [comicList, setComicList] = useState([]);

    const getComicList = async () => {
        if(!localStorage.getItem("comicList")) {
            const { data } = await api.get(`/comics?format=comic&formatType=comic&noVariants=false&dateDescriptor=thisMonth&limit=80&apikey=${import.meta.env.VITE_API_KEY}`);
            const list = data.data.results;

            const max = list.length / 10;
            const numbers = [];
            for(let i = 0; i < max; i++) {
                const generateNumber = () => {
                    let number = Math.round(Math.random() * (list.length - 1));
                    
                    if(numbers.includes(number)) {
                        number = generateNumber();
                    }

                    console.log(number);
                    return number;
                }
                
                numbers.push(generateNumber());
            }
            console.log(numbers);

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