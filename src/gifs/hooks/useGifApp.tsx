import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifByQuery } from "../actions/get-gifs-by-query-actions";


// const gifsCache: Record<string, Gif[]> = {};

export const useGifApp = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const termClicked = async (term: string) => {

        // if (gifsCache[term]) {
        //     setGifs(gifsCache[term]);
        //     return;
        // }

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        // console.log(term);
        const gif = await getGifByQuery(term);
        setGifs(gif);
    };
    const handleSearch = async (query: string) => {

        query = query.toLowerCase().trim();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].splice(0, 6));

        const gif = await getGifByQuery(query);
        setGifs(gif);

        // gifsCache.[query] = gif;
        gifsCache.current[query] = gif;
        console.log(gifsCache);

    };
    return {
        //Properties
        gifs,

        //Mehods or actions
        previousTerms,
        termClicked,
        handleSearch
    };
}




