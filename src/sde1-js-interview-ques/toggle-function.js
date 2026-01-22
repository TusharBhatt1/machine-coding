function toggle(...args) {
    let index = 0
    return function () {
        if (args.length === 0) return
        // if(index===args.length) index=0
        index = (index + 1) % args.length
        return args[index++]
    }
}
const onOff = toggle("on", "off", "on-off", "off-on")

console.log(onOff()) // on
console.log(onOff()) // off
console.log(onOff()) // on-off
console.log(onOff()) // off-on
console.log(onOff()) // on
console.log(onOff()) // off
console.log(onOff()) // on-off
console.log(onOff()) // off-on