import React, { useRef } from "react";
import Movie from "./Movie";

const MovieList = ({
    movies,
    onSelectMovie,
    page,
    onPageChange,
    totalPages,
    totalResults,
}) => {
    const listRef = useRef(null);

    const handleIncrease = () => {
        onPageChange(page + 1);
        window.scrollTo({ top: listRef.current });
    };

    const handleDecrease = () => {
        onPageChange(page - 1);
        window.scrollTo({ top: listRef.current });
    };

    return (
        <React.Fragment>
            {!totalResults && (
                <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl w-full text-center md:text-4xl lg:text-2xl">
                    Search results will appear here
                </h1>
            )}
            <ul
                className="list-none px-4 overflow-scroll md:pt-[6rem] lg:pt-2"
                ref={listRef}
            >
                {movies?.map((movie) => (
                    <Movie
                        movie={movie}
                        key={movie.imdbID}
                        onSelectMovie={onSelectMovie}
                    />
                ))}
            </ul>
            {totalResults > 10 && (
                <div className="bg-inherit flex justify-around items-center px-2 pt-0 pb-4">
                    <h1
                        className="text-[2.5rem] cursor-pointer font-bold md:text-[3rem]"
                        role="button"
                        onClick={handleDecrease}
                    >
                        &#8678;
                    </h1>
                    <h2 className="text-[1.3rem] font-semibold md:text-[1.6rem]">
                        Page {page} / {totalPages}
                    </h2>
                    <h1
                        className="text-[2.5rem] cursor-pointer font-bold md:text-[3rem]"
                        role="button"
                        onClick={handleIncrease}
                    >
                        &#8680;
                    </h1>
                </div>
            )}
        </React.Fragment>
    );
};

export default MovieList;
