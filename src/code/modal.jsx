import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// portal renders the children into some other location (removing the overhead of z-index, overflow-hidden etc)

export default function Modal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyboardpress = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyboardpress);
    return () => document.removeEventListener("keydown", handleKeyboardpress);
  }, []);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      {open &&
        createPortal(
          <div className="bg-gray-100/80 fixed inset-0">Hello</div>,
          document.body
        )}
    </>
  );
  //   return (
  //    <div>

  //   {open &&  <div className='bg-gray-100/80 fixed inset-0 flex justify-center items-center font-bold'>
  // Modal content
  // <button onClick={()=>setOpen(false)}>Close</button>
  //     </div>}
  //    </div>
  //   )
}
