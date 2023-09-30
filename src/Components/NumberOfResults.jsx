import React from "react";

const NumberOfResults = ({ totalResults }) => {
    return (
        <div className="num-result">
            {totalResults > 0 && (
                <p className="text-white mt-4 text-2xl md:text-[1.8rem] lg:text-[1.4rem]">
                    Found <strong>{totalResults}</strong> results
                </p>
            )}
        </div>
    );
};

export default NumberOfResults;
