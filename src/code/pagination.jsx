import { useEffect, useState } from "react"

async function getData(pageNumber=1,pageCount=5){
  const data= Array.from({length:50},(_,i)=>`Item-${i+1}`)
  const currentData= data.slice((pageNumber-1)*pageCount,pageNumber*pageCount)
  return {
    data:currentData,
    pageNumber,
    total:data.length,
    pageCount
  }
}

export default function Pagination() {
const [pageN,setPageN]=useState(1)
const [totalPages,setTotalPages]=useState(0)

const [items,setItems]=useState([])

  useEffect(()=>{
    async function fetchData(){
      const res = await getData(pageN)
      setItems(res.data)
      setTotalPages(res.total/5)
    }
    fetchData()
  },[pageN])

  return (
  <div className="inline-block space-y-2">
    {items.map((i)=><p key={i} className="bg-amber-300 p-1">{i}</p>)}
    <div className="space-x-2">
    {Array.from({length:totalPages},(_,i)=>(
      <button key={`button-${i}`} className="border p-1" onClick={()=>setPageN(i+1)}>{i+1}</button>
    ))}
    </div>
  </div>
  )
}
