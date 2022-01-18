import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "./Header.module.scss";

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Link to="/">
          <img src="./images/logo.png" alt="" className={styles.logo} />
        </Link>
        <div className={styles.navigation}>
          <ul>
            <li>
              <Link to="/about" className={styles.link}>
                About
              </Link>
            </li>
          </ul>
          <Button  onClick={togglePopUp} label="Login" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
