import * as React from "react";

const style: object = {
    fontSize: "2.5vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",
    width: "fit-content",
    color: "rgb(0, 0, 0, 1)",
    backgroundColor: "rgb(0, 0, 0, .2)"
};

interface RegularButtonProps {
    text?: string;
    customStyle?: string;
    onClick: () => React.MouseEvent<HTMLButtonElement>
}
export default function Button({text, customStyle, onClick }: RegularButtonProps) {
    return (
        <button style={style} onClick={onClick} value={text}>
            {text}
        </button>
    );
}