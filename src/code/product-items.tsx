import React, { useState,useEffect,useMemo,useCallback } from 'react'

const PRODUCTS = [
  { id: 1, name: "iPhone", price: 70000, category: "Electronics" },
  { id: 2, name: "T-Shirt", price: 1200, category: "Clothing" },
  { id: 3, name: "MacBook", price: 150000, category: "Electronics" },
  { id: 4, name: "Jeans", price: 2500, category: "Clothing" },
  { id: 5, name: "Atomic Habits", price: 500, category: "Books" },
];

const App=()=>{
  const [filters,setFilters]=useState({
    selectedCategory:"all",
    minPrice:0,
    arrange:null
  })
 const [selectedCategory,setSelectedCategory]=useState("all")
  const [minPrice,setMinPrice]=useState(0)
  const [arrange,setArrange]=useState(null)
  
  const filteredProducts=useMemo(()=>{
    const filtered=PRODUCTS.filter((pr)=>{
    const categoryMatch=filters.selectedCategory==="all" || pr.category ==filters.selectedCategory
    const minPriceMatch=pr.price>=minPrice
    return categoryMatch && minPriceMatch
    })
    if(filters.arrange){
      if(filters.arrange==="ascending") return filtered.sort((a,b)=>a.price-b.price)
      else return filtered.sort((a,b)=>b.price-a.price)
    }
    return filtered
  },[filters])
  
  // const [count,setCount]=useState(0)
  return (
    <>
      {/* <button onClick={()=>setCount(p=>p+1)}>+</button> */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",borderBottom:"1px solid"}} >
        <p>
          Name
        </p>
        <p>
          Price
        </p>
        <p>Category</p>
      </div>
    {filteredProducts?.map(({id,name,price,category})=>(
      <div key={`${name}-${id}`} style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
      <p>{name}</p>
      <p>{price}</p>
      <p>{category}</p>
      </div>
    ))}
    <Filters filters={filters} setFilters={setFilters}/>
    </>
  )
}

const Filters=React.memo(function Filters({filters,setFilters}){ 
  console.log("I AM FILTERS")
  const allCategories=useMemo(()=>["all",...new Set(PRODUCTS.map((p)=>p.category))],[])

  
  return <div style={{marginTop:"20px"}}>
    <p>Categories:</p>
    {
      allCategories.map((c,i)=><button key={`${c}-${i}`} onClick={()=>setFilters(p=>({
        ...p,
        selectedCategory:c
      }))}>{c.toUpperCase()}</button>)
    }
    <input placeholder="enter min price"/> value={filters.minPrice} onChange={(e)=>setFilters(p=>({
        ...p,
        minPrice:e.target.value
      }))}/>
  
    <button onClick={()=>setFilters(p=>({
        ...p,
        arrange: (!p.arrange || p.arrange==="descending") ? "ascending" : "descending"

      }))}>{filters.arrange ?? "Arrange None"}
    </button>
  </div>
})



export default App