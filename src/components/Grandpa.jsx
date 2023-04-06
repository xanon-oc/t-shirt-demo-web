import React, { createContext, useState } from "react";
import Father from "./Father";
import Uncle from "./Uncle";
import Aunty from "./Aunty";
import "./CSS/Grandpa.css";

export const RingContext = createContext("gold");
export const moneyContext = createContext(0);
const Grandpa = () => {
  const ring = "diamond";
  const [money, setMoney] = useState(0);
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Has money : {money}</p>
      <moneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="golden ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty ring={ring}></Aunty>
          </section>
        </RingContext.Provider>
      </moneyContext.Provider>
    </div>
  );
};

export default Grandpa;

// create a context
