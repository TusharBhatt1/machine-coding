import React, { useEffect, useState } from "react";

async function getData(currentPage = 1, pageSize = 5) {
  await new Promise((res) => setTimeout(() => res(), 2000));
  const totalItems = Array.from({ length: 50 }, (_, i) => `Item-${i + 1}`);

  const startI = (currentPage - 1) * 5;
  const returningData = totalItems.slice(startI, startI + pageSize);

  return {
    items: returningData,
    totalCount: totalItems.length,
  };
}

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getData(currentPage);
      setTotalPages(data.totalCount / 5);
      setData((prev) => ({ ...prev, [currentPage]: data.items }));
    }
    if (!data[currentPage]) fetchData();
  }, [currentPage,data]);

  return (
    <div>
      <h2>Pagination</h2>
      <div>
        <div className="min-h-36">
          {data[currentPage] ? (
            data[currentPage]?.map((d) => <p>{d}</p>)
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            style={{ background: currentPage === i + 1 && "lightGreen" }}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
