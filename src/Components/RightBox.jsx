import React, { useContext } from "react";
import Context from "../Context/context";

const RightBox = ({ children }) => {
    const { isRightBoxOpen, setIsRightBoxOpen } = useContext(Context);

    return (
        <div
            className={`bg-color-background-500 rounded-[1rem] overflow-scroll p-2 pt-[5rem] w-[95%] mx-auto fixed inset-0 top-[168px] bottom-[8px] z-30 transition duration-500 ease-out md:w-[85%] md:px-4 ${
                isRightBoxOpen ? "translate-x-0" : "translate-x-[-150%]"
            } lg:w-[85%] lg:h-[calc(100vh-6.5rem)] lg:top-[8px] lg:absolute`}
        >
            <button
                className="fixed top-4 left-4 text-color-text border-none rounded-full w-[3rem] text-[2rem] aspect-square bg-color-background-900 z-20 md:w-[4rem] md:text-[2.5rem] lg:w-[3rem] lg:text-[2rem]"
                onClick={() => {
                    setIsRightBoxOpen(false);
                }}
            >
                &#8678;
            </button>
            {children}
        </div>
    );
};

export default RightBox;
