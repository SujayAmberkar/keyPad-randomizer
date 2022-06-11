import React,{useState,useEffect} from 'react'
import './Protected.css'

function Protected() {
    const limit = 4;
    const [x, setX] = useState('')
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

    useEffect(() => {
        buttonLabel.sort(() => Math.random() - 0.5);
      });
    

  return (
    <div>
        <h1>{x}</h1>
            <div className='keypad-container'>
            {buttonLabel.map((i)=>{
                return <button className='number-button' onClick={inputHandler}>{i}</button>
            })}
            <button className='number-button' onClick={deleteOne}>{text}</button>
            <button onClick={enterHandler}>Enter</button>
        </div>
    </div>
  )
}

export default Protected