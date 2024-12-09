import {useState} from 'react'

function HookCounter() {

const [counter, setCounter] = useState(0);

const plus = () =>{
    if(counter < 20){
        setCounter(counter + 1);
    }
   
   
};
const minus = () =>{
    if(counter > 0){
        setCounter(counter - 1);
    }
    
};

  return (
    <div>
        <div className='container'>
        <h1>HookCounter</h1>
        <button onClick={plus}>
            plus
        </button><br />
         <button onClick={minus}>
            minus
        </button> 
        <h1>conter{counter}</h1>
        </div>
    </div>
  )
}

export default HookCounter