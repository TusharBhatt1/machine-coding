import React, { useState } from 'react'

const DATA=[
  {id:1,
  name:"src",
  type:"folder",
   children:[
     {id:2,
     name:"test.js",
      type:"file",
     },
     {
       id:3,
       name:"components",
       type:"folder",
       children:[
          {id:4,
     name:"button.js",
      type:"file",
     },
       ]
     }
   ]
  }
]

const App = () => {
  const [data,setData]=useState(DATA)
  const [addToId,setAddToId]=useState(null)

  const handleAdd=(newName,type)=>{
    const newNode={
      id:crypto.randomUUID(),
      name:newName,
      type,
      ...(type==="folder" && {children:[]})
  }
    function addNode(tree){
      const updatedTree=tree.map((t)=>{
        if(t.id===addToId){
          return {
            ...t,
            children:[...(t.children || []),newNode]
          }
        }
        if(t.children){
          return {
            ...t,
            children:addNode(t.children)
          }
        }

        return t
      })
      
      return updatedTree
    }

    const updatedData=addNode(data)
    console.log(updatedData)
    setAddToId(null)
    setData(updatedData)
  }
  return (
    <RenderData data={data} setData={setData} addToId={addToId} setAddToId={setAddToId} handleAdd={handleAdd} />
  )
}

function RenderData({data,setData,addToId,setAddToId,handleAdd}){
  const [newName,setNewName]=useState("")

  return (
    <>
    {data?.map(({id,name,type,children})=>(
    <div key={id}>
      {type==="folder" ? "📁" : "📄"}
      {name}
      {type==="folder" && <button style={{marginLeft:"20px"}} onClick={()=>setAddToId(id)}>Add</button>}
      {children && (<div style={{paddingLeft:"20px"}}>
            <RenderData data={children} setData={setData} addToId={addToId} setAddToId={setAddToId} handleAdd={handleAdd} />

      </div>)}
      {addToId===id && (
      <div>
        <input value={newName} onChange={(e)=>setNewName(e.target.value)}/>
        <button onClick={()=>handleAdd(newName,"file")}>
          Add file
        </button>
        <button onClick={()=>handleAdd(newName,"folder")}>
          Add folder
        </button>
      </div>)}
        
    </div>
    ))}
     </>
  )
      
}

export default App