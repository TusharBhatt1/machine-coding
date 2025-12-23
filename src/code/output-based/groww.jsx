import { useEffect } from "react";

// GROWW
function example1() {
    console.log("start");
  
    const promise1 = new Promise((resolve) => {
      console.log(1);
      resolve(2);
      console.log(3);
    });
  
    promise1.then((res) => {
      console.log(res);
    });
  
    console.log("end");
  }
  
  function example2() {
    const myObject = {
      foo: "bar",
  
      func: function () {
        const self = this;
  
        console.log("outer func: this.foo = " + this.foo); 
        console.log("outer func: self.foo = " + self.foo);
  
        (function () {
          console.log("inner func: this.foo = " + this.foo); 
          console.log("inner func: self.foo = " + self.foo);
        })();
      },
    };
  
    myObject.func();
  }
  
  
  function example3() {
    function foo() {
      let a = b = 0; 
      a++;
      return a;
    }
  
    foo();
  
    console.log(typeof a); 
    console.log(typeof b);
  }

  function example4(){
    const x = {
      Re: "some"
      }
      const y= 34;
      const z = x.re > y; //undefind > 34 -> 0 > 34
      console.log(typeof typeof typeof z)
      
  }

  // Tell how many times the something will be logged on console

const Comp = () => {
  let state = {};

  useEffect(() => {
    console.log('useEffect');
  }, [state]);

  state = {
    er: 'se',
  };

  return <>{JSON.stringify(state)}</>;

  // 'state' is not a React state, it's a local variable and React won't track it
  // reassigning variable != updating react state
};

  example1();
  example2();
  example3();
  example4()
  Comp()