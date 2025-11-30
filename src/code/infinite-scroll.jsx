import React, { useEffect, useRef, useState } from "react";

async function getData(totalFetched, itemPerCall = 10) {
  await new Promise((res) => setTimeout(() => res(), 2000));
  const totalItems = Array.from({ length: 50 }, (_, i) => `Item-${i + 1}`);
  const returningItems = totalItems.slice(
    totalFetched,
    totalFetched + itemPerCall
  );
  return {
    data: returningItems,
    hasMore: totalFetched + 5 < totalItems.length,
  };
}
export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const triggeRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting && hasMore) {
        const items = await getData(data.length);
        setData((p) => [...p, ...items.data]);
        setHasMore(items.hasMore);
      }
    });
    observer.observe(triggeRef.current);

    return () => observer.disconnect();
  }, [data.length,hasMore]);

  return (
    <div>
      <h2>Infinite Scroll</h2>
      <main className="h-40 bg-amber-100 overflow-auto">
        {data.map((d) => (
          <p>{d}</p>
        ))}
        <p ref={triggeRef}>
          {hasMore ? "Loading..." : "No more data to fetch"}
        </p>
      </main>
    </div>
  );
}
