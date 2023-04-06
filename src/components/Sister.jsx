import React, { useContext } from "react";
import { moneyContext } from "./Grandpa";

const Sister = () => {
  const [money] = useContext(moneyContext);
  return (
    <div>
      <h2>Sister</h2>
      <p>
        <small>sister has {money}</small>
      </p>
    </div>
  );
};

export default Sister;
