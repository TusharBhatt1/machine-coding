import React, { useEffect } from 'react'
import "./App.css"
export default function App() {

  //
// area
// : 
// "Kadubeesanhalli"
// city
// : 
// "Bangalore"
// gender
// : 
// "Male"
// name
// : 
// "Coinswitch"
// pin
// : 
// 560087
  const input = {
    name: 'John Doe',
    gender: 'Male',
    address: {
      area: 'MG Road',
      city: 'Bangalore',
      pin: 560037
    },
    office: {
      address: {
        area: 'Kadubeesanhalli',
        city: 'Bangalore',
        pin: 560087
      }
    },
    skills: ['js', 'react', 'react-native']
  }
 
  useEffect(()=>{
    let result={}
    function flatten(obj,suffix){
      for(let key in obj){
        if(typeof obj[key]==="object"){
        //  if(Array.isArray(obj[key])){
        //   obj[key].forEach((item,i)=>{
        //     result[key+"_"+i] = item
        //   })
        //  }
        //  else {
          if(suffix)  flatten(obj[key],suffix+"_"+key) 
          else flatten(obj[key],key)
        //  }
        }
        else {
          if(suffix){
            result[suffix+"_"+key]=obj[key]
          }
          else {
            result[key]=obj[key]
          }
        }
      }
     }
     flatten(input,"")
    console.log(result)
  },[])
  
  // else if(Array.isArray(input[key])){

  // }
  

  
  return (
    <div>
     Helllo world
    </div>
  )
}
