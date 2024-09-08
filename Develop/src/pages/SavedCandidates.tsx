import type Candidate from "../interfaces/Candidate.interface";
import CandidateSearch from "./CandidateSearch";

const SavedCandidates = () => {


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
              <tr>
                <td><img></img></td>
                <td><h3>Joshua</h3></td>
                <td><p>Awesomplace, Japan</p></td>
                <td><a>joshua@email.com</a></td>
                <td><p>Best Company</p></td>
                <td><p>I like video games and ice cream!</p></td>
                <td><button>Reject</button></td>
              </tr>
          </tbody>
        </table>
      </main>
    </>
  );
};

export default SavedCandidates;
