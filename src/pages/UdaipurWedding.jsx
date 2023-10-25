// import React, { useState, useEffect } from "react";
// import '../styles/styling.css';

// export default function UdaipurWedding() {
//   const [data, setData] = useState([]);
//   const condition = "weddingCity"; // Modify this with your condition

//   useEffect(() => {
//     // Correctly construct the API endpoint URL with a query parameter
//     fetch(`/wedding?weddingCity=${condition}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data); // Update the state with the fetched data
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [condition]);

//   return (
//     <div>
//       <h1>Data Fetched from MySQL with Condition</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.weddingImg}>{item.weddingCity}</li>
//           // Replace "weddingImg" and "weddingCity" with the fields you want to display
//         ))}
//       </ul>
//     </div>
//   );
// }
