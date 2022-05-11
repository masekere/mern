import {useContext} from "react"

export default function Menu({MenuContext}) {
    const { menuDispatch } = useContext(MenuContext)
    return (
        <div className='menu'>
            <button className='menu-btn' onClick={() => menuDispatch("toggle")}>toggle</button>
            <button className='menu-btn' onClick={() => menuDispatch("array")}>array</button>
            <button className='menu-btn' onClick={() => menuDispatch("object")}>object</button>
            <button className='menu-btn' onClick={() => menuDispatch("shallow")}>shallow</button>
        </div>
    )
}