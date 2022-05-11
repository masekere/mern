import {useState} from 'react';

export default function Toggle() {
    const [bool,setBool] = useState(false);
    const toggle = ()=>{
        setBool(!bool)
    }
    return (
        <div>
            <h1>Toggle</h1>
            <button className='toggle' onClick={toggle}>{bool ? "Hide" : "Show"}</button>
            <div className={`container ${bool && 'visible'}`}></div>
        </div>
    )
}