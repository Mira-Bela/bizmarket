import { useContext, useState } from "react";
import { Context } from "./Context/context";
import "./pop-up.css";

const PopUp = (props) => {
  const toggle = useContext(Context);
  const [text, setText] = useState({
    name: "",
    password: "",
  });

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={toggle.togglePopUp}>
          x
        </span>
        <b>BizMarket</b>
        
      </div>
    </div>
  );
};
export default PopUp;
