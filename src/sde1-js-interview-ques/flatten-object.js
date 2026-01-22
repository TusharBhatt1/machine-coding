const obj = { a: "10", b: { x: "100", y: { val: 200 } } }

function flatten(obj) {
    let result = {}
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            result = { ...result, ...flatten(obj[key]) }
        }
        else result[key] = obj[key]
    }
    return result
}

console.log(flatten(obj))


// const obj={a:"10",b:{x:"100",y:{val:200}}}
// //ans => [1,2,3,7,10,11,100]
// function flatten(obj,depth){
//     let result={}
//     if(depth===0) return obj
//     for(let key in obj){
//         if(typeof obj[key]==="object" ) {
//             result={...result,...flatten(obj[key],depth-1)}
//         }
//         else result[key]=obj[key]
//     }
//     return result
// }

// console.log(flatten(obj,1))