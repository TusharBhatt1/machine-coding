import React, { Activity, useState } from "react";
import useIsMounted from "./useIsMounted";
import Count from "./Count";

export default function Razorpay() {
  const isMounted = useIsMounted();
  console.log(isMounted);
  const [show, setShow] = useState(true);

  return (
    <div>
      Razorpay
      <Activity mode={show ? "visible" : "hidden"}>
        <Count />
      </Activity>
      {/* {show && <Count />} */}
      <button onClick={() => setShow(!show)}>SHOW</button>
    </div>
  );
}
