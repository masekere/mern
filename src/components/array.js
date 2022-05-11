import {useEffect, useReducer, useRef} from 'react'

const itemsReducer = (state,action)=>{
    switch (action.type) {
        case "add":
            // console.log(action);
            return [
                ...state,
                {
                    id: state.length,
                    name: action.name,
                }
            ];  
        case "remove":
            return state.filter((_,index)=>action.index !== index)  
        case "clear":
            // console.log(action);
            return []   
        default:
            return state;
    }
}


export default function Array() {
    const inputRef = useRef()
    const [items,dispatch] = useReducer(itemsReducer,[])

    useEffect(()=>{
        inputRef.current.focus()
    },[inputRef])

    const handleSubmit = e=>{
        e.preventDefault()
        dispatch({
            type: "add",
            name: inputRef.current.value
        })
        inputRef.current.value = ""
        inputRef.current.focus()
    }

    const clearArray = ()=>{
        dispatch({
            type: "clear"
        })
        inputRef.current.value = ""
        inputRef.current.focus()
    }
    
    function handleRemove(index){
        dispatch({
            type: "remove",
            index
        })
        inputRef.current.value = ""
        inputRef.current.focus()
    }
    return (
        <>
            <h1>Array</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    ref={inputRef}
                />
                <button onClick={clearArray}>clear</button>
                <button type="submit">Submit</button>
            </form>
            <ul>
                {items.map((item,index)=>item.name && (
                    <li key={index}>
                        {item.name}
                        <button onClick={()=>handleRemove(index)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}