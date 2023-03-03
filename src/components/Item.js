import React from "react";
import { useSelector } from "react-redux";

function Item({ data }) {
  const store = useSelector((store) => store);
  return (
    <div className="shadow-md bg-white text-center">
      <p className="text-2xl p-10"></p>
      <div className="shadow-md bg-white text-center flex flex-col ">
        <h1 className="text-2xl bg-slate-100  ">University</h1>
        <img src={data.message} />
        <h2>image burada</h2>
      </div>
    </div>
  );
}

export default Item;
