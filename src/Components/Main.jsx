import React from "react";

const Main = ({ children }) => {
    return (
        <main className="flex flex-col relative lg:w-[85%] mx-auto">
            {children}
        </main>
    );
};

export default Main;
