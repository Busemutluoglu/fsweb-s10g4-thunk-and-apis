import React from "react";
import { useDispatch } from "react-redux";
import { getUniversity } from "./../actions";

function Item({ data }) {
  const dispatch = useDispatch();
  return (
    <div className="shadow-md bg-white text-center">
      <div>
        Selam! Birkaç üniversite bilgisi ister misin?{" "}
        {
          <button
            onClick={() => dispatch(getUniversity())}
            className="block px-4 py-2 bg-amber-500">
            üniversiteleri getir
          </button>
        }
      </div>
      <p className="text-2xl p-10">{data.title}</p>
    </div>
  );
}

export default Item;
