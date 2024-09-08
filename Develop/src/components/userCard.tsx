import type Candidate from "../interfaces/Candidate.interface";
import '../index.css';

// the user card in which all the user information will be put on
const UserCard = (props: Candidate) => {
    return (
        <>
            <div className="userCard">
                <div className="imgContainer">
                <img src={props.image} width='200' height='200'></img>
                </div>

                <div className="userInfo">
                    <h2>{props.name}</h2>
                    <p>{props.location}</p>
                    <label>Email:<a>{props.email}</a></label>
                    <p>Company: {props.company}</p>
                    <p>Bio: {props.bio}</p>
                </div>

                <div className="userButtons">
                    <button onClick={() => (props.acceptUser ? props.acceptUser(props.id) : {})}>
                        Accept User
                    </button>

                    <button onClick={() => (props.declineUser ? props.declineUser(props.id) : {})}>
                        Decline User
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserCard;