import {useState} from 'react'

export default function Object() {
    const initial = {
        room: {
            id: 101,
            type: "medium",
            occupied: false
        }
    }
    const [mgm, setRoom] = useState(initial)
    const handleCheckBoxChange = () => {
        setRoom({
            room: {
                ...mgm.room,
                occupied: !mgm.room.occupied
            }
        })
    }
    function handleSelectChange(e) {
        setRoom({
            room: {
                ...mgm.room,
                id: e.target.value
            }
        })
        console.log(mgm.room)
    }

    function handleRadioChange(e) {
        setRoom({
            room: {
                ...mgm.room,
                type: e.target.value
            }
        })
        console.log(mgm.room)
    }

    return (
        <div className='room'>
            <h1>Object</h1>
            <form>
                <input
                    type="checkbox"
                    value='occupied'
                    checked={mgm.room.occupied}
                    onChange={handleCheckBoxChange}
                /> occupied .
                <select value={mgm.room.id} onChange={handleSelectChange}>
                    <option value={101}>101</option>
                    <option value={102}>102</option>
                    <option value={103}>103</option>
                </select> id
                <input type="radio" onChange={handleRadioChange} value="small" name="type" /> small
                <input type="radio" checked={mgm.room.type === "medium"} onChange={handleRadioChange} value="medium" name="type" /> medium
                <input type="radio" onChange={handleRadioChange} value="large" name="type" /> large
            </form>
            <h2>Room info</h2>
            <div className='room-info'>
                <div><strong>id:</strong> {mgm.room.id}</div>
                <div><strong>type:</strong> {mgm.room.type}</div>
                <div><strong>occupied:</strong> {mgm.room.occupied.toString()}</div>
            </div>
        </div>
    )
}

/* 
https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
*/
