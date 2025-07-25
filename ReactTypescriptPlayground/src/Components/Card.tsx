import React from "react";
import Button from "../Components/Button.tsx";

let Style: object = {
  display: "flex",
  height: "auto",
  width: "50%",
  padding: "15px",
  margin: "10px",
  border: "2px solid black",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  gap: "100px",
};

const testClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget.textContent);

  // Create a new div element
  const newDiv = document.createElement("div");
  const thisCardEl: HTMLElement | null = document.getElementById("hello");
  newDiv.textContent = "New div added!";
  newDiv.style.cssText =
    "background-color: lightblue; padding: 5px; margin: 2px; border-radius: 3px;";

  // Append the div to the button
  thisCardEl.appendChild(newDiv);
};

export default function Card() {
  return (
    <div style={Style}>
      <div id="hello">This is my card.</div>
      <Button id="asd" text="asd" onClick={testClick} />
    </div>
  );
}
