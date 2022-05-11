import {useState, useEffect} from 'react';

export default function Shallow() {
    const api = ""
    useEffect(()=>{
        console.log("mgm that is cool");
    },[api])

    const initial = {
        data: "mgm",
        user: {
            name: "gift",
            age: 19
        }
    }
    const [intel,setIntel] = useState(initial)

    const refresh = ()=>{
        setIntel(
            initial
        )
    }
    const wipeUserAge = ()=>{
        setIntel({
            user: {
                name: "Gift"
            }
        })
    }
    const changeData = ()=>{
        setIntel({
            data: "mgm.co.zw"

        })
    }

    return (
        <div>
            <h1>Shallow</h1>
            <div><button onClick={refresh}><b>refresh</b></button></div>
            <div><button onClick={wipeUserAge}><b>wipeUserAge</b></button></div>
            <div><button onClick={changeData}><b>changeData</b></button></div>
            <div>
                {`{
                ${intel.data ? intel.data : ""} 
                ${intel.user && intel.user.name ? intel.user.name : "" } 
                ${intel.user && intel.user.age ? intel.user.age : ""} 
                }`}
            </div>
            {/* {intel.data && <div>{`intel.data`}</div>}
            {intel.user && intel.user.name && <div>{intel.user.name}</div>}
            {intel.user && intel.user.age && <div>{intel.user.age}</div>} */}
        </div>
    )
}

/* 
to be refactored
*/