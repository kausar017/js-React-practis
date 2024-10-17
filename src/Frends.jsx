import { useEffect, useState } from 'react'
import './frends.css'
import Frind from './Frind'

export default function Frends() {

    const [Frends, setFrends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFrends(data))
        .catch(error => console.log(error))
    },[])


    return(
        <div className='box'> 
            <h3>Frends: {Frends.length}</h3>
            {
                Frends.map(frend => <Frind frind={frend}></Frind>)
            }
        </div>
    )
}