//execute a function once for every count
function message(){
    console.log("hello")
}
function sampler(func,count){
    let totalCalls=0
    return function(){
        totalCalls++
        if(totalCalls%count===0) func()
    }
    
}

const sample=sampler(message,4)

sample()
sample()
sample()
sample() // this will execute
sample()
sample()
sample()
sample() // this will execute