const nestedArray=[[1,2,[3,7],[10,11]],[100]]
//ans => [1,2,3,7,10,11,100]
const flattened=[]
function flattenArray1(arr){
    for(let val of arr){
        if(Array.isArray(val)) flattenArray1(val)
        else flattened.push(val)
    }
}
flattenArray1(nestedArray)
console.log(flattened)

// ----------

function flattenArray2(arr,ans){
    for(let val of arr){
        if(Array.isArray(val)) flattenArray2(val,ans)
        else ans.push(val)
    }
    return ans
}

console.log(flattenArray2(nestedArray,[]))

// ----------

function flattenArray3(arr){
    let result=[]
    for(let val of arr){
        if(Array.isArray(val)) result.push(...flattenArray3(val))
        else result.push(val)
    }
    return result
}

console.log(flattenArray3(nestedArray))
