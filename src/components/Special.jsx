import React, { useContext } from "react";
import { RingContext } from "./Grandpa";

const Special = ({ ring }) => {
  const angti = useContext(RingContext);
  return (
    <div>
      <h2>Special</h2>
      <p>
        Ring : <small>{angti}</small>
      </p>
    </div>
  );
};

export default Special;
