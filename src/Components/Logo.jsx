const Logo = () => {
    return (
        <div className="flex items-center gap-[0.8rem] logo">
            <img
                className="w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem]"
                src="pop-corn.png"
            />
            <h1 className="text-[2rem] font-semibold text-white hidden lg:block">
                usePopcorn
            </h1>
        </div>
    );
};

export default Logo;
