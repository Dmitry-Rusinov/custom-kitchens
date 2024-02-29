import React from "react";
import styles from "./Button.module.scss";

function Button({width, height='49', text, type, margin='15px 0 0 20px', disabled}) {
  return (
    <>
      <button
        style={{ width: width, height: height, margin: margin }}
        className={
          type === "white"
            ? styles.button
            : `${styles.button} ${styles.button_white}`
        }
        type="button"
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
