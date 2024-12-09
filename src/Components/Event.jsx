import React from 'react'

function Event() {
function ClickTheButton(){
  alert("You clicked the button");
}
  return (
    <div>
      <h1>Events</h1>
      <button onClick={ClickTheButton}>Click Me</button>
      {/* <button onClick={() => alert("Clicked")}>Click Me</button> we can used arrow ftn to control by default alert */}
    </div>
  )
}

export default Event;