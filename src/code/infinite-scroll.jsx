import React, { useCallback, useEffect, useRef, useState } from "react";

async function getData(totalFetched, itemToFetch = 10) {
  const data = Array.from({ length: 50 }, (_, i) => `Item-${i + 1}`);

  const currentData = data.slice(totalFetched || 0, totalFetched + itemToFetch);

  const result ={
    data: currentData,
    total: data.length,
    totalFetched: totalFetched === 1 ? itemToFetch : totalFetched,
    hasMore: !(totalFetched >= data.length),
  };
  return new Promise((res)=>{
    setTimeout(()=>res({result}),2000)
  })


}
export default function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [fetchMore, setFetchMore] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const fetchData= useCallback(()=>async function () {
    const res = await getData(items.length);
    console.log(res.result.data);
    setHasMore(res.result.hasMore);
    setItems((p) => [...p, ...res.result.data]);
  },[items])

  useEffect(() => {
    if (hasMore) fetchData();
  }, [fetchData, fetchMore, hasMore]);

  useEffect(() => {
    if (!hasMore) return;
    const triggerEl = triggerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("trigger...");
          setFetchMore((p) => p + 1);
        }
      },
      {
        threshold: 1,
      }
    );
    if (triggerEl) observer.observe(triggerEl);
    return () => observer.disconnect(triggerEl);
  }, [hasMore]);

  return (
    <div className="border size-72 overflow-scroll" ref={containerRef}>
      {items.map((i, ind) => (
        <p key={ind} className="bg-amber-300 p-1">
          {i}
        </p>
      ))}
      <p ref={triggerRef}>{hasMore ? "Fetching..." : "no more"}</p>
    </div>
  );
}
