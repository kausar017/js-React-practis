import { useEffect, useState } from "react"

export default function Usars() {

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.log(error))

    },[])

    return (
        <div>
            <h1>Usears: {users.length}</h1>
        </div>
    )
}