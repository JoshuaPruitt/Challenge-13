import { useState, useEffect} from 'react';
import { searchGithub, searchGithubUser, grabUsersJson } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import UserCard from '../components/userCard';

const clearStorage = () => {
  //clear the local storage
  localStorage.clear()
  // localStorage.setItem('acceptedUsers', JSON.stringify(''))
  console.log("Local Storage Has been Cleared!")
}


const CandidateSearch = () => {
  const [users, updateUser] = useState<Candidate[] | []>([]);

  // useEffect(() => {
  //   searchGithub().then((userData) => {
  //     updateUser(userData);
  //   });
  // }, []);

  useEffect(() => {
      grabUsersJson().then((userData) => {
        updateUser(userData);
      });
    }, []);
  
  
  //function for accepting a user. Run when the accept user button is clicked.
  const acceptUser = (id: number) => {
    //send the current user to the accepted array and set the next user
    const acceptedUser = users.find((user: Candidate) => user.id === id);

    if (acceptedUser){
      //grab the local storage
      const savedUsers = JSON.parse(localStorage.getItem('acceptedUsers') || "[]")
      //push the accepted user and push it to the savedUsers array
      const updatedAcceptedUsers  = [...savedUsers, acceptedUser]

      console.log("accepted Users:", updatedAcceptedUsers)
      //set the local storage with the updated information
      localStorage.setItem('acceptedUsers', JSON.stringify(updatedAcceptedUsers))

      //remove the user from the page.
      const updatedUsers = users.filter((user: Candidate) => user.id !== id);
      alert(
        `User ${acceptUser.name} has been accepted!`
      )
      updateUser(updatedUsers);
    }
  }

  // the function for declining a user.
  const declineUser = (id: number) => {
    const updatedUsers = users.filter((user: Candidate) => user.id !== id);

    alert(
      `The selected user has been declined`
    )

    updateUser(updatedUsers);
  }

  

  return (
    <div className='mainPage'>
      
      <header>
        <h1>Candidate Search</h1>
      </header>

      <main>
        {users.map((user) => (
          <>
            <UserCard 
            key={user.id}
            acceptUser={acceptUser}
            declineUser={declineUser}
            {...user}
            />
          </>
        ))}

        <button onClick={() => clearStorage()}>
          Clear Local Storage
        </button>
      </main>
      
    </div>
  );
};



export default CandidateSearch;
 