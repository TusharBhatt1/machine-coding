import React from 'react';

function HOC(WrappedComponent) {
  return function (props){
    if(props.isLoading) return <p>Loading...</p>
    return <WrappedComponent {...props}/>
  }
}

function Child() {
  return <p>I AM A CHILD COMPONENT</p>;
}

const HocChild = HOC(Child);

export default function Check() {
  return <HocChild isLoading />;
}


//A Pure Component re-renders only when its props
//Controlled: React fully controls its value via useState.
// An Uncontrolled Component manages its own state internally — React doesn’t control its value directly. We use ref to read the value when needed.

