export async function fetchWithRetries(fetchCall, retries = 3) {
  console.log("retrying: ", retries);
  try {
    const res = await fetchCall(retries === 1);
    return res;
  } catch (error) {
    await new Promise((r) => setTimeout(r, 2000));
    if (retries > 0) return await fetchWithRetries(fetchCall, retries - 1);
    else throw error;
  }
}

export async function getData(shouldReturnData) {
  const data = Array.from({ length: 100 }, (_, i) => `Item-${i + 1}`);
  if (shouldReturnData) return data;
  else throw new Error("this fetch failed");
}
