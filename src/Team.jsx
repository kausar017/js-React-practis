import { useState } from "react"

export default function Team() {

    const [Team, setTeam] = useState(0);
    // console.log(Team);

    const addPlayer = () => {
        const newCount = Team +1;
        setTeam(newCount)
    }

    const removPlayer = () => {
        const newCount = Team -1;
        setTeam(newCount)
    }

    return (
        <div className="teamStyle">
            <h3>Players: {Team}</h3>
            <div className="playersbtn">
                <button onClick={removPlayer}>Remove Player</button>
                <button onClick={addPlayer}>Add Player</button>
            </div>
        </div>
    )
}