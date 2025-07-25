import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import Style from "./toggleButton.module.scss";

interface ToggleSliderProps {
  label: string;
}

const ToggleSlider: React.FC<ToggleSliderProps> = ({ label }) => {
  const [isOn, setIsOn] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const toggle = () => {
    setIsOn(!isOn);
    if (isOn === false) {
      // Clear any existing interval first
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      // Start new interval and store the ID
      intervalRef.current = setInterval(() => {
        console.log("Toggle is on");
      }, 1000);
    } else if (isOn === true) {
      console.log("Toggle is off");
      // Clear the interval when turning off
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className={Style.toggleContainer}>
      <label className={Style.toggleLabel}>{label}</label>
      <div
        className={classNames(Style.toggleSlider, {
          [Style.on]: isOn,
          [Style.off]: !isOn,
        })}
        onClick={toggle}
      >
        <div
          className={classNames(Style.onOrOff, { [Style.off]: isOn === false })}
        >
          {isOn ? "yes" : "no"}{" "}
        </div>
        <div className={Style.toggleThumb}></div>
      </div>
    </div>
  );
};

export default ToggleSlider;
