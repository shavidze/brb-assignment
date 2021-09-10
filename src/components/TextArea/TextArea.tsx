import { FC, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const TextArea: FC<TextAreaProps> = ({ label, name, className, ...props }) => {
    return (
        <div className="field">
            <div className="control">
                <label htmlFor={name}>{label}</label>
                <textarea className={className} {...props}></textarea>
            </div>
        </div>
    );
};

export default TextArea;
