// // App2.js
// import React, { useState, useEffect } from "react";
// import DisplayContent from "./DisplayContent";
// import S_Data from "./S_Data";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App2 = () => {
//   const [movies, setMovies] = useState([]);
//   const [series, setSeries] = useState([]);
//   const [loading, setLoading] = useState(false); // Changed to false since we're using local data
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState(""); // Empty initial search term
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8; // Number of items to show per page

//   useEffect(() => {
//     // Load all series initially
//     setSeries(S_Data);
//     filterSeries(searchTerm);
//   }, [searchTerm, currentPage]);

//   const filterSeries = (term) => {
//     setLoading(true);
//     try {
//       if (!term.trim()) {
//         // If search term is empty, show all series with pagination
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const paginatedSeries = S_Data.slice(
//           startIndex,
//           startIndex + itemsPerPage
//         );
//         setSeries(paginatedSeries);
//       } else {
//         // Filter series based on search term
//         const filtered = S_Data.filter((item) =>
//           item.title.toLowerCase().includes(term.toLowerCase())
//         );
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const paginatedSeries = filtered.slice(
//           startIndex,
//           startIndex + itemsPerPage
//         );
//         setSeries(paginatedSeries);

//         if (filtered.length === 0) {
//           setError("No series found matching your search");
//         } else {
//           setError(null);
//         }
//       }
//       setLoading(false);
//     } catch (err) {
//       setError("Error filtering series");
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const term = e.target.elements.search.value.trim();
//     setSearchTerm(term);
//     setCurrentPage(1); // Reset to first page on new search
//   };

//   // Calculate total pages based on filtered results
//   const totalItems = searchTerm
//     ? S_Data.filter((item) =>
//         item.title.toLowerCase().includes(searchTerm.toLowerCase())
//       ).length
//     : S_Data.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   return (
//     <div className="App">
//       <header className="bg-dark text-white py-4 mb-4">
//         <div className="container">
//           <h1 className="text-center mb-4">Movie & Series Hub</h1>
//           <form
//             onSubmit={handleSearch}
//             className="row g-3 justify-content-center"
//           >
//             <div className="col-md-6">
//               <div className="input-group">
//                 <input
//                   type="text"
//                   name="search"
//                   className="form-control"
//                   placeholder="Search series..."
//                   defaultValue={searchTerm}
//                 />
//                 <button className="btn btn-primary" type="submit">
//                   Search
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </header>

//       <main className="container">
//         {loading ? (
//           <div className="text-center py-5">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <p className="mt-2">Loading series...</p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger text-center">{error}</div>
//         ) : (
//           <>
//             <DisplayContent movies={movies} series={series} />
//             {totalPages > 1 && (
//               <div className="d-flex justify-content-center my-4">
//                 <button
//                   className="btn btn-outline-primary me-2"
//                   disabled={currentPage === 1}
//                   onClick={() =>
//                     setCurrentPage((prev) => Math.max(1, prev - 1))
//                   }
//                 >
//                   Previous
//                 </button>
//                 <span className="mx-3 align-self-center">
//                   Page {currentPage} of {totalPages}
//                 </span>
//                 <button
//                   className="btn btn-outline-primary ms-2"
//                   disabled={currentPage >= totalPages}
//                   onClick={() => setCurrentPage((prev) => prev + 1)}
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </main>

//       <footer className="bg-dark text-white py-3 mt-5">
//         <div className="container text-center">
//           <p className="mb-0">
//             © {new Date().getFullYear()} Movie & Series Hub
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App2;
