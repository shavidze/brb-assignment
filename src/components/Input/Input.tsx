import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: FC<InputProps> = ({
    type = "text",
    placeholder,
    name,
    label,
    ...props
}) => {
    return (
        <div className="field">
            <div className="control">
                <label htmlFor={name}>{label}</label>
                <input
                    className="input"
                    type={type}
                    placeholder={placeholder}
                    id={name}
                    {...props}
                />
            </div>
        </div>
    );
};

export default Input;
