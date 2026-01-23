const input={
    a:{
        b:(a,b,c)=>a+b+c,
        c:(a,b,c)=>a+b-c
    },
    d:(a,b,c)=>a-b-c
}
// function pipe(input){
//   let result=input
//   function checkNested(obj,args){
//       let result=obj
//       for(let k in obj){
//           if(typeof obj[k] ==="function"){
//               result[k]=obj[k](...args)
//           }
//           else if(typeof obj[k]==="object"){
//               checkNested(obj[k])
//           }
//           else result[k]=obj[k]
//       }
//       return result
//   }
//     return function check(...args){
//         for(let k in input){
//             if(typeof input[k] ==="object"){
//               result[k] = checkNested(input[k],args)
//             }
//             else if(typeof input[k] ==="function"){
//                 result[k]=input[k](...args)
//             }
//            else result[k]=input[k]
//         }
//         return result
//     }
    
// }

function pipe(input){
    let result=input
      return function check(...args){
          for(let k in input){
              if(typeof input[k] ==="object"){
                result[k] = pipe(input[k])(...args)
              }
              else if(typeof input[k] ==="function"){
                  result[k]=input[k](...args)
              }
             else result[k]=input[k]
          }
          return result
      }
      
  }
const output=pipe(input)(1,1,1)
console.log(output)