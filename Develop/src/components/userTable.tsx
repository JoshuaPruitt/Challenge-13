import type Candidate from "../interfaces/Candidate.interface";
import '../index.css'

const UserTable = (props: Candidate) => {
    return (
        <>
            <tr>
                <td><img src={props.image} width="100" height="100"></img></td>
                <td><h3>{props.name}, {props.username}</h3></td>
                <td><p>{props.location}</p></td>
                <td><a>{props.email}</a></td>
                <td><p>{props.company}</p></td>
                <td><p>{props.bio}</p></td>
                <td><button onClick={() => (props.declineUser ? props.declineUser(props.id) : {})}>Reject</button></td>
            </tr>
        </>
    )
}

export default UserTable;