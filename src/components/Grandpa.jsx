import React from "react";
import Father from "./Father";
import Uncle from "./Uncle";
import Aunty from "./Aunty";
import "./CSS/Grandpa.css";

const Grandpa = () => {
  const ring = "diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <section className="flex">
        <Father ring={ring}></Father>
        <Uncle></Uncle>
        <Aunty ring={ring}></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;
