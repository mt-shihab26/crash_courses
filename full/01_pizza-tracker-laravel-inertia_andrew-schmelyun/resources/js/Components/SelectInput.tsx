import {ChangeEvent, forwardRef, useEffect, useRef} from "react";

export default forwardRef(function SelectInput(
    {
        className = "",
        isFocused = false,
        options = [],
        ...props
    }: {
        id?: string,
        value: string;
onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
        className?: string; isFocused?: boolean; options: string[] },
    ref,
) {
    const input: any = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " + className
            }
            ref={input}
        >
            {options.map(option => (
                <option key={option}>{option}</option>
            ))}
        </select>
    );
});
