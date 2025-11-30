import React, { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    };
    document.addEventListener("click", handleClick);
  }, []);
  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button onClick={() => setOpen(!open)}>{open ? "CLOSE" : "OPEN"}</button>
      {open && (
        <ul className="bg-red-100">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
}
