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
  backgroundColor: "rgb(0, 0, 0, .2)",
};

interface RegularButtonProps {
  id: string;
  text?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({ id, text, onClick }: RegularButtonProps) {
  return (
    <button id={id} style={style} onClick={onClick} value={text}>
      {text}
    </button>
  );
}
