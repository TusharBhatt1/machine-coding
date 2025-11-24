import React, { useEffect, useState } from "react";

export default function AbortControllerEx() {
  const [cancel, setCancel] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((d) => console.log(d))
      .catch((e) => console.error(e));

    if (cancel % 2 === 0) controller.abort("this is a test reason");

    return () => controller.abort();
  }, [cancel]);

  return (
    <div>
      <button onClick={() => setCancel((p) => p + 1)}>Cancel request</button>
    </div>
  );
}
