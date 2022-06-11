import React,{useState} from 'react'
import './Keypad.css';

function Keypad() {
    const limit = 4;
    const [x, setX] = useState('')
    const [y, setY] = useState('')
    const [buttonLabel, setButtonLabel] = useState([1,2,3,4,5,6,7,8,9,0])
    const text='<-'
    function inputHandler(e){
        if(x.length!==limit){
            setX(x + e.target.innerHTML);
        }  
    }
    
    const deleteOne=()=>{
        setX('')
    }

    const enterHandler=()=>{
        alert("Password Entered "+x)
    }
  return (
    <div>
        <h1>{x}</h1>
            <div className='keypad-container1'>
            {buttonLabel.map((i)=>{
                return <button className='number-button' onClick={inputHandler}>{i}</button>
            })}
            <button className='number-button' onClick={deleteOne}>{text}</button>
            <button onClick={enterHandler}>Enter</button>
            
        </div>
    </div>
  )
}

export default Keypad