import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "./Header.module.scss";
import Popup from "./popup-form/pop-up.jsx";
import { Context } from "./Context/context";

const HeaderMenu = () => {
  const popUp = useContext(Context);
  const [text, setText] = useState({
    email: "",
    password: "",
  });
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
          <Button label="Login" />
          {popUp.isOpen && (
            <Popup
              HandleClose={popUp.toggleClose}
              content={
                <>
                  <b> Login into BizMarket</b>
                  <form>
                    <div>
                      <label>Email</label>
                      <br />
                      <input
                        className="input-form"
                        type="email"
                        name="email"
                        onChange={(e) =>
                          setText({
                            ...text,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label>Password</label>
                      <br />
                      <input
                        className="input-form"
                        type="text"
                        name="password"
                        onChange={(e) =>
                          setText({
                            ...text,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                    <button className="login-btn">Login</button>
                  </form>
                  {/* Add New to BizzmMark sign up  */}
                  <a className="popup-footer" href={"url"}>
                    {" "}
                    New to BizMarket?&nbsp;<span>Sign Up</span>
                  </a>
                </>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
