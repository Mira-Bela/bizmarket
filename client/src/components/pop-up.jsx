import { useState } from "react";

const PopUp = (props) => {
  const [text, setText] = useState({
    name: "",
    password: "",
  });

  return (
    <div>
      <div>
        <span>x</span>
        <b>BizMarket</b>
      </div>
    </div>
  );
};
export default PopUp;
