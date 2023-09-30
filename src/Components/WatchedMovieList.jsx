import WatchedMovie from "./WatchedMovie";

const WatchedMovieList = ({ watched, onDeleteWatched }) => {
    return (
        <ul className="list-none overflow-scroll py-4">
            {watched.map((movie) => (
                <WatchedMovie
                    key={movie.imdbID}
                    movie={movie}
                    onDeleteWatched={onDeleteWatched}
                />
            ))}
        </ul>
    );
};

export default WatchedMovieList;
