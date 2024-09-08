import { useState, useEffect} from "react";
import { grabUsersJson } from "../api/API";
import type Candidate from "../interfaces/Candidate.interface";
import UserTable from "../components/userTable";

const SavedCandidates = () => {
  const [users, updateUser] = useState<Candidate[] | []>([]);

  useEffect(() => {
    grabUsersJson().then((userData) => {
      updateUser(userData);
    });
  }, []);

  const declineUser = (id: number) => {
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
    <>
      <h1>Potential Candidates</h1>

      <main>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>

          <tbody>
             {users.map((user) => (
              <>
                <UserTable 
                key={user.id}
                declineUser={declineUser}
                {...user}
                />
              </>
             ))} 
          </tbody>
        </table>
      </main>
    </>
  );
};

export default SavedCandidates;
