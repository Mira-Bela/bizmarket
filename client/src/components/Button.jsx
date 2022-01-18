import React, { useContext } from "react";
import styles from "./Button.module.scss";
import { Context } from "./Context/context.jsx";

const Button = ({ label }) => {
  const open = useContext(Context);
  
  return (
    <>
      <button onClick={open.togglePopUp} className={styles.btn}>
        {label}
      </button>
    </>
  );
};

export default Button;
