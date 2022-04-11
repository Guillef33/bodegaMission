// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

// import fondoVinedo from "../../assets/fondoVinedo.png";

// import logoPNG from "../../assets/LogosPNGOk.png";

// import "./About.scss";
// import "./results.scss";

// const AboutUs = () => {
//   const [show, setShow] = useState(false);
//   const delay = 4;
//   let navigate = useNavigate();
//   useEffect(() => {
//     Swal.fire({
//       // position: "top-end",
//       title: "Thanks for your feedback.",
//       // icon: "success",
//       text: "Now you can see the correct answer",
//       customClass: "button-about",
//     });
//     let timer1 = setTimeout(() => setShow(true), delay * 1000);

//     // this will clear Timeout
//     return () => {
//       clearTimeout(timer1);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className="aboutUs-container"
//         style={{
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundImage: `url(${fondoVinedo})`,
//         }}
//       >
//         <div className="aboutUs-wrapper">
//           <div className="aboutUs-title-container">
//             <h2 className="results-subtitle">And the answer is:</h2>
//             {/* <div className="aboutUs-mid"></div>
//             <img className="aboutUs-image-vid" src={vector} alt="logo" /> */}
//             <img className="aboutUs-image" src={logoPNG} alt="logo" />
//           </div>
//           <div className="results-text-container">
//             <h2 className="results-title">Albarin</h2>

//             <p className="results-text">
//               This grape variety is originally from Asturias, then expanded in
//               Cantabria & Castilla y León. It almost disappeared until 10 years
//               ago winegrowers began to replant it. You can still find vines that
//               are over 100 years old. It is sometimes confused with albariño
//               gallego or albillo but is not actually related to them.
//             </p>
//           </div>
//         </div>
//         {/* <div className="aboutUs-loader">
//           {!show ? (
//             <p>
//               Calculating your results
//               <br /> Please wait...
//             </p>
//           ) : (
//             <button
//               className="getResultButton"
//               onClick={() => navigate("/score")}
//             >
//               Get Results
//             </button>
//           )}
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default AboutUs;
