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