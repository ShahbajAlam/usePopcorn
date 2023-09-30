import React, { useContext, useEffect, useState } from "react";
import NumberOfResults from "./Components/NumberOfResults";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import LeftBox from "./Components/LeftBox";
import RightBox from "./Components/RightBox";
import MovieList from "./Components/MovieList";
import WatchedSummary from "./Components/WatchedSummary";
import WatchedMovieList from "./Components/WatchedMovieList";
import Loader from "./Components/Loader";
import ErrorMessage from "./Components/ErrorMessage";
import MovieDetails from "./Components/MovieDetails";
import { useMovies } from "./CustomHooks/useMovies";
import { useLocalStorage } from "./CustomHooks/useLocalStorage";
import Context from "./Context/context";

const average = (arr) =>
    arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);

export default function App() {
    const [isRightBoxOpen, setIsRightBoxOpen] = useState(false);
    const [query, setQuery] = React.useState("");
    const [watched, setWatched] = useLocalStorage([], "watched");
    const [selectedId, setSelectedId] = React.useState(null);
    const [page, setPage] = React.useState(1);
    const [movies, isLoading, error, totalPages, totalResults] = useMovies(
        query,
        page,
        handleCloseMovie
    );

    useEffect(() => {
        setIsRightBoxOpen(false);
    }, [query]);

    const handleSelectMovie = (selectedId) => {
        setSelectedId((id) => (id === selectedId ? null : selectedId));
    };

    function handleCloseMovie() {
        setSelectedId(null);
    }

    const handlePageChange = (num) => {
        if (num <= 0 || num > totalPages) return;
        setPage(num);
    };

    const handleAddWatched = (movie) => {
        setWatched((watched) => [...watched, movie]);
    };

    const handleDeleteWatched = (id) => {
        setWatched((w) => w.filter((e) => e.imdbID !== id));
    };

    return (
        <Context.Provider value={{ isRightBoxOpen, setIsRightBoxOpen }}>
            <Navbar setQuery={setQuery}>
                <NumberOfResults totalResults={totalResults} />
            </Navbar>

            <Main average={average}>
                <LeftBox>
                    {isLoading && <Loader />}
                    {error && <ErrorMessage message={error} />}
                    {!isLoading && !error && (
                        <MovieList
                            movies={movies}
                            onSelectMovie={handleSelectMovie}
                            page={page}
                            totalPages={totalPages}
                            totalResults={totalResults}
                            onPageChange={handlePageChange}
                        />
                    )}
                </LeftBox>
                <RightBox>
                    {selectedId ? (
                        <MovieDetails
                            selectedId={selectedId}
                            watched={watched}
                            onCloseMovie={handleCloseMovie}
                            onAddWatched={handleAddWatched}
                        />
                    ) : (
                        <React.Fragment>
                            <WatchedSummary
                                average={average}
                                watched={watched}
                            />
                            <WatchedMovieList
                                watched={watched}
                                onDeleteWatched={handleDeleteWatched}
                            />
                        </React.Fragment>
                    )}
                </RightBox>
            </Main>
        </Context.Provider>
    );
}
