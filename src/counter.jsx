import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)
    // console.log(count);

    const handalCount = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const addReadus = () => {
        const newCount = count - 1;
        setCount(newCount)
    }


    return (
        <div style={{ border: '2px solid red', borderRadius:'20px', marginBottom:'20px'}}>
            <h3>counter: {count}</h3>
            <div className="count">
                <button onClick={addReadus}><img style={{hight:'10px', width:'20px'}} src="https://cdn-icons-png.flaticon.com/512/262/262039.png" alt="" /></button>
                <button onClick={handalCount}><img style={{hight:'10px', width:'20px'}} src="https://cdn-icons-png.flaticon.com/512/3114/3114824.png" alt="" /></button>
            </div>
        </div>
    )
}