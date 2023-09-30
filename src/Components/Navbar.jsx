import Logo from "./Logo";
import Search from "./Search";

const Navbar = ({ children, setQuery }) => {
    return (
        <nav className="grid items-center justify-items-center  bg-color-primary px-4 py-6 navbar h-[9.5rem] w-[95%] mx-auto rounded-[0.9rem] md:w-[85%] lg:h-[5rem]">
            <Logo />
            <Search setQuery={setQuery} />
            {children}
        </nav>
    );
};

export default Navbar;
