function curry() {
    let total = 0
    return function (v = 0) {
        return total += v
    }
}
const sum = curry()
sum(5) //5 
sum(3) //3
sum(2) //10