import Context from "../Context/context";
import { useContext } from "react";

const Movie = ({ movie, onSelectMovie }) => {
    const { setIsRightBoxOpen } = useContext(Context);

    return (
        <li
            onClick={() => {
                onSelectMovie(movie.imdbID);
                setIsRightBoxOpen(true);
            }}
            className="relative list border-b-color-background-100 border-b-[5px] cursor-pointer transition-all hover:bg-color-background-100 mb-4"
        >
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3 className="text-[1.25rem] font-semibold md:text-[1.8rem] lg:text-[1.5rem]">
                {movie.Title}
            </h3>
            <div className="flex items-center">
                <p className="flex items-center gap-2 text-[1.2rem] md:text-[1.5rem] lg:text-[1.4rem]">
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    );
};

export default Movie;
