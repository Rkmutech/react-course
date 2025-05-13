import React, { useState } from "react";

export default function SetState() {
  let [index, setIndex] = useState(0);

  return (
    <>
      <h1>My favorite color is {index}!</h1>
      <button
        type="button"
        onClick={() => setIndex(index+3)}
      >miuns 3</button>
      <button type="button" onClick={()=>setIndex(index-3)}>plus 3</button>
    </>
  )
} 
