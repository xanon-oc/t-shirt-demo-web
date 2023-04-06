import React, { useContext } from "react";
import Cousin from "./Cousin";
import { moneyContext } from "./Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(moneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>
        <small>grandpa money : {money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000TK</button>
      <section className="flex">
        <Cousin>Nabil</Cousin>
        <Cousin>Maliba</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
