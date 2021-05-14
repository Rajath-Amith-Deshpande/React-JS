import React,{useState,useRef} from 'react'
import ctx from './createContext'
import Child from './Child'

const Parent = () => {
    const [state,setState] = useState()
    const inputRef = useRef()
    const submitData = () => {
        setState(inputRef.current.value)
        inputRef.current.value = ''
    }
    return (
        <div>
        <input type="text" ref={inputRef} />
        <button onClick={submitData}></button>
        <br />
        <ctx.Provider value={state}>
            <Child />
        </ctx.Provider>
        </div>
    )
}

export default Parent;