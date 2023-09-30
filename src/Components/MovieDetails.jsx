import React, { Fragment, useContext, useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { useKey } from "../CustomHooks/useKey";
import Context from "../Context/context";
const KEY = "c9fea27c";

const MovieDetails = ({ watched, selectedId, onCloseMovie, onAddWatched }) => {
    const { setIsRightBoxOpen } = useContext(Context);
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const isWatched = watched.map((el) => el.imdbID).includes(selectedId);
    const watchedUserRating = watched.find(
        (el) => el.imdbID === selectedId
    )?.userRating;
    useKey(onCloseMovie, "escape");

    const {
        Title: title,
        Poster: poster,
        Runtime: runtime,
        imdbRating: rating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie;

    const handleAdd = () => {
        const newWatchedMovie = {
            imdbID: selectedId,
            poster,
            title,
            rating: Number(rating),
            userRating,
            runtime: parseInt(runtime),
        };

        onAddWatched(newWatchedMovie);
        onCloseMovie();
    };

    useEffect(() => {
        const getMovieDetails = async () => {
            setIsLoading(true);
            const res = await fetch(
                `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
            );
            const data = await res.json();
            setMovie(data);
            setIsLoading(false);
        };
        getMovieDetails();
    }, [selectedId]);

    useEffect(() => {
        if (!title) return;
        document.title = `Movie | ${title}`;

        return () => {
            document.title = "usePopcorn";
        };
    }, [title]);

    return (
        <Fragment>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="p-2 flex flex-col items-center details bg-color-background-100 rounded-[0.9rem] md:px-4 lg:mt-2 lg:p-6">
                    <button
                        className="absolute top-4 left-4 text-color-text border-none rounded-full w-[3rem] text-[2rem] aspect-square bg-color-background-900 z-20 md:w-[4rem] md:text-[2.5rem] lg:w-[3rem] lg:text-[2rem]"
                        onClick={() => {
                            onCloseMovie();
                            setIsRightBoxOpen(false);
                        }}
                    >
                        &#8678;
                    </button>
                    <img
                        src={poster}
                        alt={`Poster of movie ${title}`}
                        className="rounded-[0.9rem]"
                    />
                    <div className="w-full px-4 py-4 flex flex-col gap-2 mt-2 rounded-[0.9rem] md:p-6 name">
                        <h2 className="text-[1.6rem] mb-2 leading-[1.1] md:text-[2rem] lg:text-[2.5rem]">
                            {title}
                        </h2>
                        <p className="text-[1.1rem] md:text-[1.5rem] lg:text-[1.2rem]">
                            {released} &bull; {runtime}
                        </p>
                        <p className="text-[1.1rem] md:text-[1.5rem] lg:text-[1.2rem]">
                            {genre}
                        </p>
                        <p className="text-[1.1rem] md:text-[1.5rem] lg:text-[1.2rem]">
                            <span>⭐</span>
                            {rating} IMDb rating
                        </p>
                    </div>
                    <section className="flex flex-col py-4 md:py-6">
                        <div className="bg-color-background-100 rounded-[0.9rem] p-4 mb-[0.8rem] font-semibold flex flex-col gap-[1rem]">
                            {!isWatched ? (
                                <StarRating
                                    size={28}
                                    onSetRating={setUserRating}
                                />
                            ) : (
                                <p className="text-[1.2rem] text-center p-2 md:text-[1.6rem]">
                                    ✌ Already added with rating{" "}
                                    {watchedUserRating}
                                </p>
                            )}
                            {userRating > 0 && (
                                <button
                                    className="bg-color-primary text-color-text border-none rounded-full text-[1.4rem] font-bold cursor-pointer transition-all py-2 lg:w-[50%] lg:mx-auto"
                                    onClick={handleAdd}
                                >
                                    + Add to list
                                </button>
                            )}
                        </div>
                        <p className="text-[1.3rem] mb-3 md:text-[1.5rem]">
                            <em>{plot}</em>
                        </p>
                        <p className="text-[1.2rem] mb-3 md:text-[1.4rem]">
                            Starring {actors}
                        </p>
                        <p className="text-[1.2rem] md:text-[1.4rem]">
                            Directed by {director}
                        </p>
                    </section>
                </div>
            )}
        </Fragment>
    );
};

export default MovieDetails;
