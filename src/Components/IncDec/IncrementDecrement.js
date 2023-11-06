import React, { useState} from 'react'

export const IncrementDecrement = () => {
    const [count, setCount] = useState(0)
    const [isError, setIsError] = useState(false)

    let funcInc = () => {
        setCount(count + 1)
        setIsError(false)
    }

    let funcDec = () => {
        if(count < 1){
            console.log("Already count is 0")
            setIsError(true)
        }
        else{
            setCount(count - 1)
        }
    }

  return (
    <div>
        <div>{count}</div>
        <button onClick={funcInc}> Increment </button>
        <button onClick={funcDec}> Decrement </button>
        <div>{isError ? 'Already count is 0' : ''}</div>
    </div>
  )
}

export default IncrementDecrement