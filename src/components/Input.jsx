const Input = ({ text, placeholder, id, type }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={id}>{text}</label>
            <input
                className="border px-3 py-2 outline-none"
                type={type}
                id={id}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
