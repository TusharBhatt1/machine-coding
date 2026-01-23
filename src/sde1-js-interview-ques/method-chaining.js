const calculator = {
    total: 0,
    add: function (v) {
        this.total += v
        return this
    },
    subtract: function (v) {
        this.total -= v
        return this
    },
    multiple: function (v) {
        this.total *= v
        return this
    }
}

calculator.add(10).subtract(10).add(10).multiple(10)
console.log(calculator.total) //100