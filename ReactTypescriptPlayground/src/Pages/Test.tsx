import ButtonToPath from "../Components/ButtonToPath.tsx";
import Card from "../Components/Card.tsx";
import style from "../Components/style.module.scss";
import "../Styling/test-page.css";
import ToggleSlider from "../Components/ToggleButton.tsx";

export default function Test() {
  return (
    <>
      <nav className={"test-nav"}>
        <ButtonToPath
          customStyle={style.testStyle}
          path={"/"}
          text={"GO HOME"}
        />
        <ButtonToPath customStyle="test-style" path={"/"} text={"GO HOME"} />
        <ButtonToPath customStyle="test-style" path={"/"} text={"GO HOME"} />
        <ButtonToPath customStyle="test-style" path={"/"} text={"GO HOME"} />
        <ButtonToPath
          customStyle={style.testStyle}
          path={"/"}
          text={"GO HOME"}
        />
      </nav>
      <Card />
      <ToggleSlider label="Do you like ice cream?" />
      <ToggleSlider label="Are you eligible to apply?" />
    </>
  );
}
