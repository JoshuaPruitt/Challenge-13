import { useState, useEffect, ReactNode } from 'react';
import { searchGithub, searchGithubUser, grabUsersJson } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import UserCard from '../components/userCard';

const acceptedUsers: [] = []
const i: number = 0

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
  

  const acceptUser = (id: number) => {
    //send the current user to the accepted array and set the next user
    const updatedUsers = users.map((user: Candidate) => {
      if (user.id === id) {
        alert(
          `User accepted`
        )

        return {...user};
      }
      return user
    });
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
            {...user}
            />
          </>
        ))}
      </main>
      
    </div>
  );
};



export default CandidateSearch;
 