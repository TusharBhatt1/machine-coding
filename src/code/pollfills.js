//MAP
Array.prototype.mymap = function(cb){
    const res=[]
    for(let v of this){
       res.push(()=>cb(v))
    }
    console.log(res)
}

const arr1=[1,2]
arr1.mymap((v)=>v+1)


// FILTER
Array.prototype.myfilter = function(cb){
    const res=[]
    for(let v of this){
       const isTrue=cb(v)
       if(isTrue) res.push(v)
    }
    console.log(res)
}

const arr2=[1,2,3,4]
arr2.myfilter((v)=>v>2)

//Reduce
Array.prototype.myreduce=function(cb,initialV){
    let ans = initialV
    for(let v of this){
        ans = cb(v,ans)
    }
    console.log(ans)
}

const arr3=[1,2,3,4]

arr3.myreduce((a,b)=>a*b,1)

//Promise.all

Promise.myAll=function(promises){
    return new Promise((resolve,reject)=>{
        let result=[]
    
        promises.forEach((p,i)=>{
            p.then((res)=>{
                result[i++]=res
                
                if(result.length===promises.length){
                    resolve(result)
                }
             
            })
            .catch((err)=>{
                reject(err)
                
            })
        })
    })
}

Promise.myAll([Promise.resolve(2)]).then((r)=>console.log(r))


// Promise.all
// → Resolves when ALL promises resolve
// → Rejects immediately if ANY promise rejects (fail-fast)

// Promise.allSettled
// → Waits for ALL promises to settle (fulfilled or rejected)
// → Returns an array of result objects { status, value | reason }

// Promise.any
// → Resolves with the FIRST fulfilled promise
// → Ignores rejections unless ALL promises reject
// → Rejects with AggregateError if all fail

// Promise.race
// → Settles with the FIRST promise to settle
// → Can resolve OR reject (whichever happens first)

// ------

//call back hell vs promise

// console.log("started")
// const getFirstData=function(cb){
//     setTimeout(()=>
//     cb("firstdata")
//     ,1000)
// }
// const getSecondData=function(cb){
//      setTimeout(()=>
//     cb("seconddata")
//     ,2000)
// }
// const getThirdData=function(cb){
//      setTimeout(()=>
//     cb("thirddata")
//     ,3000)
// }
// getFirstData((d1)=>{
//     getSecondData((d2)=>{
//          getThirdData((d3)=>{
//         console.log(d1+d2+d3)
//     })
//     })
// })  ---> 6 seconds in total


// const getfirstp= new Promise((res,rej)=>
//  setTimeout(()=>
//     res("d1")
//     ,1000)
// )
// const getsecondp= new Promise((res,rej)=>
//  setTimeout(()=>
//     res("d2")
//     ,2000)
// )
// const getthirdp= new Promise((res,rej)=>
//  setTimeout(()=>
//     res("d3")
//     ,3000)
// )

// const p1 = await getfirstp
// const p2= await getsecondp
// const p3 = await getthirdp

// console.log(p1+p2+p3) --> ~3 seconds











