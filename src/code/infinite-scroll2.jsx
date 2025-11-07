import React, { useEffect, useRef, useState } from "react";

const fetchData = (offset, length = 10) => {
  const data = Array.from({ length: 50 }, (_, i) => `Item-${i + 1}`);
  const currentData = data.slice(offset, offset + length);
  return new Promise((res)=>setTimeout(()=>res({ items: currentData, total: data.length }),1000))
};

export default function InfiniteScroll2() {
  const triggerRef = useRef(null);
  const [items, setItems] = useState([]);
  const [hasMore,setHasMore]=useState(true)

  useEffect(() => {
    const triggerEl = triggerRef.current;
    const observer = new IntersectionObserver(async(entry) => {
      if (entry[0].isIntersecting && hasMore) {
        const data = await fetchData(items.length);
        setItems([...items, ...data.items]);
        console.log(items.length)
        console.log(data.total)
        console.log(items.length+10 < data.total)
        setHasMore(items.length+10 < data.total)
      }
    });
    observer.observe(triggerEl);
    return () => observer.unobserve(triggerEl);
  }, [hasMore, items]);

  return (
    <div className="size-48 border overflow-y-scroll">
      {items.map((i) => (
        <p key={i}>{i}</p>
      ))}
      <p ref={triggerRef}>{hasMore ? "Fetching..." :"NO MORE ITEMS"}</p>
    </div>
  );
}
