import { useState } from 'react'
import React from 'react'

function UseState() {
 const [data, setData] = useState("gul");
  function UpdatedData(){
    setData("khan")
  }
  

  return (
    <div>
        <h1>{data}</h1>
        <button onclick={UpdatedData} >UpdatedData</button>
    </div>
  );
}

export default UseState