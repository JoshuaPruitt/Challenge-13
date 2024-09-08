import { useState, useEffect, ReactNode } from 'react';
import { searchGithub, searchGithubUser, grabUsersJson } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';

const acceptedUsers: [] = []

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
  

  const acceptUser = () => {
    //send the current user to the accepted array and set the next user
  }

  return (
    <div>
      
      <header>
        <h1>CandidateSearch</h1>
      </header>

      <main>
        
        <div>
          <img></img>
        </div>

        <h2>Name</h2>
        <p>Location</p>
        <label>Email:<a>placeholder@mail.com</a></label>
        <p>Company: Placeholder</p>
        <p>Bio: Placeholder</p>

        <div>
          <button></button>
        </div>
        
      </main>
      
    </div>
  );
};



export default CandidateSearch;
 