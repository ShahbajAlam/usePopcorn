const ErrorMessage = ({ message }) => {
    return (
        <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl w-full text-center md:text-4xl">
            <span>📛 </span>
            {message}
        </p>
    );
};

export default ErrorMessage;
