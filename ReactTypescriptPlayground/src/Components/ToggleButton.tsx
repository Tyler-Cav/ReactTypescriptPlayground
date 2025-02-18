import React, { useState } from 'react';
import classNames from 'classnames';
import Style from './toggleButton.module.scss'

interface ToggleSliderProps {
  label: string;
}

const ToggleSlider: React.FC<ToggleSliderProps> = ({ label }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={Style.toggleContainer}>
      <label className={Style.toggleLabel}>{label}</label>
      <div className={classNames(Style.toggleSlider, { [Style.on]: isOn, [Style.off]: !isOn })} onClick={toggle}>
          <div className={classNames(Style.onOrOff, { [Style.off]: !isOn })}> { isOn ? 'yes' : 'no'} </div>
        <div className={Style.toggleThumb}></div>
      </div>
    </div>
  );
};

export default ToggleSlider;