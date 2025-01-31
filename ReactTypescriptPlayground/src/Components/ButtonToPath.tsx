import { Link } from "react-router-dom";

interface MyButtonProps {
    path: string;
    text: string;
    customStyle?: string;
}

export default function ButtonToPath({ path, text, customStyle }: MyButtonProps) {
    return (
        <Link to={path}>
            <button className={customStyle}>
                {text}
            </button>
        </Link>
    );
}