import React from 'react'
import { useState } from 'react'

function InputBlock(props) {
const [title, setInput] = useState('')

function handleChange (event){
    setInput(event.target.value)
}

    return (
        <div className="inputBlock">
            <input onChange={(e)=>handleChange(e)}></input>
            <button onClick={()=>props.clickBtn(title)}>Search</button>
        </div>
    )
}

export default InputBlock
