import Sun from "../assets/Sun.svg";
import Moon from "../assets/Moon.svg";
import Image from "next/image";
import "./toggleButton.css";
import { Dispatch, SetStateAction } from "react";

const DarkMode = ({
  clickHandler,
  darkState
}: {
    darkState: boolean
  clickHandler: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={darkState}
        onChange={() => clickHandler((state) => !state)}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Image className="svg moon" src={Moon} alt="Moon" />
        <Image className="svg sun" src={Sun} alt="Sun" />
        {/* <Sun /> */}
      </label>
    </div>
  );
};

export default DarkMode;
