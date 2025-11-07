import React, { useReducer } from "react";
import { cartReducer } from "./utils/use-cart-reducer";

export default function Cart() {
  const [state, dispatch] = useReducer(cartReducer, {
    count: 0,
  });
  const { count } = state;
  return (
    <div>
      {count}
      <button
        className="px-2 border"
        onClick={() =>
          dispatch({
            type: "PLUS",
            payload: {
              count:1
            },
          })
        }
      >
        +
      </button>
      <button className="px-2 border">-</button>
    </div>
  );
}
