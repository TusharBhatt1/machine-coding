import React, { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);
  return (
    <div className="relative inline-block" ref={dropDownRef}>
      <input onClick={() => setIsOpen(true)} className="border-black border" />
      {isOpen && (
        <div className="bg-slate-200">
          <p>Option1 </p>
          <p>Option2 </p>
          <p>Option3 </p>
        </div>
      )}
    </div>
  );
}
