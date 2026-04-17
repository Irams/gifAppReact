import type { GyphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApi<GyphyResponse>(`/search`,
        {
            params: {
                q: query,
                limit: 20,
            }
        });

    //De esta manera mapeamos (transformamos), a nuestro formato de Gif, el formato que nos devuelve la API de Giphy
    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));
};