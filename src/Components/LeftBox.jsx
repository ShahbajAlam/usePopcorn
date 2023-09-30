import { useContext } from "react";
import Context from "../Context/context";

const LeftBox = ({ children }) => {
    const { setIsRightBoxOpen } = useContext(Context);

    return (
        <div className="bg-color-background-500 rounded-[1rem] overflow-scroll pt-[5rem] relative p-2 my-2 w-[95%] mx-auto h-[calc(100vh-11rem)] md:w-[85%] md:px-4 lg:w-[85%] lg:h-[calc(100vh-6.5rem)]">
            <button
                className="absolute top-4 left-4 text-color-text border-none rounded-full w-[3rem] text-[2rem] aspect-square bg-color-background-900 z-10 rotate-180 md:w-[4rem] md:text-[2.5rem] lg:w-[3rem] lg:text-[2rem]"
                onClick={() => {
                    setIsRightBoxOpen(true);
                }}
            >
                &#8678;
            </button>
            {children}
        </div>
    );
};

export default LeftBox;
