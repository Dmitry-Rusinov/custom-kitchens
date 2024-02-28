import React from "react";
import styles from "./Button.module.scss";

function Button({width, height='49', text, type}) {
  return (
    <>
      <button
        style={{ width: width, height: height }}
        className={
          type === "white"
            ? styles.button
            : `${styles.button} ${styles.button_white}`
        }
        type="button"
      >
        {text}
      </button>
    </>
  );
}

export default Button;
