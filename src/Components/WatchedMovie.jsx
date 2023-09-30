const WatchedMovie = ({ movie, onDeleteWatched }) => {
    return (
        <li className="relative list border-b-color-background-900 border-b-[5px] cursor-pointer transition-all bg-color-background-100 mb-4 rounded-[0.9rem] p-2 hover:bg-color-background-500 md:p-4">
            <img src={movie.poster} alt={`${movie.title} poster`} />
            <h3 className="text-[1.25rem] font-semibold pr-8 md:text-[1.8rem]">{movie.title}</h3>
            <div className="flex items-center justify-between lg:px-4">
                <p className="text-[1.2rem] md:text-[1.6rem]">
                    <span>⭐️</span>
                    <span>{movie.rating}</span>
                </p>
                <p className="text-[1.2rem] md:text-[1.6rem]">
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                </p>
                <p className="text-[1.2rem] md:text-[1.6rem]">
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                </p>
                <button
                    className="absolute top-1 right-1 w-[1.75rem] aspect-square rounded-full border-none bg-color-red text-[1rem] text-color-background-900 font-semibold cursor-pointer transition-all hover:bg-color-red-dark md:w-[1.9rem]"
                    onClick={onDeleteWatched.bind(null, movie.imdbID)}
                >
                    X
                </button>
            </div>
        </li>
    );
};

export default WatchedMovie;
