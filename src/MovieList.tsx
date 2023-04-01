// import { useState } from "react";
// import data from "./MovieData.json";

// const mds = data.MovieDataList;

// function MovieList() {
//   const [listOMovies, setListOMovies] = useState(mds);
//   const addMovie = () => {
//     setListOMovies([
//       ...mds,
//       {
//         Category: "Drama",
//         Title: "Silver Linings Playbook",
//         Year: 2012,
//         Director: "David O. Russell",
//         Rating: "R",
//         Edited: "Yes",
//       },
//     ]);
//   };
//   return (
//     <>
//       <div>
//         <h3>Joel Hilton's Movie Collection</h3>
//       </div>
//       <div>
//         <table className="table-bordered table-striped">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Year</th>
//               <th>Director</th>
//               <th>Category</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {listOMovies.map((m) => (
//               <tr key={m.Title}>
//                 <td> {m.Title}</td>
//                 <td> {m.Year}</td>
//                 <td> {m.Director}</td>
//                 <td> {m.Category}</td>
//                 <td> {m.Rating}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <button className="btn btn-primary" onClick={addMovie}>
//         Add Movie
//       </button>
//     </>
//   );
// }

// export default MovieList;

import { useState } from "react";
import data from "./MovieData.json";

const mds = data.MovieDataList;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(mds);
  const addMovie = () => {
    setListOMovies([
      ...mds,
      {
        Category: "Drama",
        Title: "Silver Linings Playbook",
        Year: 2012,
        Director: "David O. Russell",
        Rating: "R",
        Edited: "Yes",
      },
    ]);
  };
  return (
    <>
      <div className="container">
        <h3 className="my-3">Joel Hilton's Movie Collection</h3>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Category</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {listOMovies.map((m) => (
                <tr key={m.Title}>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Category}</td>
                  <td>{m.Rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary" onClick={addMovie}>
          Add Movie
        </button>
      </div>
    </>
  );
}

export default MovieList;
