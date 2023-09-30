import React from "react";
import { useKey } from "../CustomHooks/useKey";

const Search = ({ setQuery }) => {
    const [input, setInput] = React.useState("");
    const inputRef = React.useRef(null);
    useKey(() => {
        inputRef.current.focus();
    }, "enter");

    React.useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <form
            className="input grid"
            onSubmit={(e) => {
                e.preventDefault();
                setQuery(e.target[0].value);
                setInput("");
            }}
        >
            <input
                ref={inputRef}
                className="placeholder-slate-50 placeholder:text-[1.4rem] placeholder:opacity-70 border-none p-2 rounded-[0.9rem] text-color-text bg-color-primary-light outline-none text-[1.4rem] font-semibold w-[95%] justify-self-center md:text-[1.75rem] md:placeholder:text-[1.7rem] md:p-3 lg:py-2 lg:placeholder:text-[1.3rem] lg:text-[1.3rem] lg:w-full"
                type="text"
                placeholder="Search movies..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
};

export default Search;
