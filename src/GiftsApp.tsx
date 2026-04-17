
import GifList from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import CustomHeader from "./shared/components/CustomHeader"
import SearchBar from "./shared/components/SearchBar"
import { useGifApp } from "./gifs/hooks/useGifApp"


export const GiftsApp = () => {
    const { handleSearch,
        gifs,
        previousTerms,
        termClicked
    } = useGifApp();

    return (
        <>
            {/* header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte los mejores gifs" />

            {/* Search */}
            <SearchBar
                placeholder="Busca lo que quieras"
                // onQuery = {(query:string) => handleSearch(query)} />
                onQuery={handleSearch} />

            {/* Busqueda previas */}
            <PreviousSearches
                searches={previousTerms}
                labelClicked={termClicked} />

            {/* Gifs */}
            <GifList gifs={gifs} />

        </>
    )
}