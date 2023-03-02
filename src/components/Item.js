import React from "react";

function Item({ data }) {
  return (
    <div className="shadow-md bg-white text-center">
      <p className="text-2xl p-10">{data.title}</p>
      <div className="shadow-md bg-white text-center flex flex-col ">
        <h1 className="text-2xl bg-slate-100  ">University</h1>
        <h2>{data.name}</h2>
      </div>
    </div>
  );
}

export default Item;
