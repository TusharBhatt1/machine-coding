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
