import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <>
      <div className={props.divClass}>
        <button className={props.className} onClick={props.onClick}>
          {props.children}
        </button>

        <svg
          width="53"
          height="2"
          viewBox="0 0 53 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L52 1"
            stroke={props.stroke}
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </>
  );
};

export default Button;
