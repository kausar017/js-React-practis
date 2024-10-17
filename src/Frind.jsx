export default function Frind({ frind }) {
    const { name, email } = frind;
    return(
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}
