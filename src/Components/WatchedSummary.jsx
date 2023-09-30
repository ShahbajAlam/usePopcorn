const WatchedSummary = ({ average, watched }) => {
    const avgImdbRating = average(watched.map((movie) => movie.rating)).toFixed(
        2
    );
    const avgUserRating = average(
        watched.map((movie) => movie.userRating)
    ).toFixed(2);
    const avgRuntime = average(watched.map((movie) => movie.runtime)).toFixed(
        2
    );

    return (
        <div className="px-3 py-4 rounded-[0.9rem] bg-color-background-100 shadow-[0 1.2rem 2.4rem rgba(0,0,0,0.2)] md:p-8">
            <h2 className="uppercase text-[1.2rem] mb-[0.6rem] text-center font-semibold md:text-[1.5rem]">
                Movies you watched
            </h2>
            <div className="flex items-center justify-between gap-1">
                <p className="flex flex-col items-center text-[1.3rem] md:text-[1.7rem]">
                    <span>📽</span>
                    <span style={{ textAlign: "center" }}>
                        {watched.length} movies
                    </span>
                </p>
                <p className="flex flex-col items-center text-[1.3rem] md:text-[1.7rem] lg:text-[1.5rem]">
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                </p>
                <p className="flex flex-col items-center text-[1.3rem] md:text-[1.7rem] lg:text-[1.5rem]">
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                </p>
                <p className="flex flex-col items-center text-[1.3rem] md:text-[1.7rem] lg:text-[1.5rem]">
                    <span>⏳</span>
                    <span style={{ textAlign: "center" }}>
                        {avgRuntime} min
                    </span>
                </p>
            </div>
        </div>
    );
};

export default WatchedSummary;
