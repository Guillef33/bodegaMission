// import React, { useEffect, useState, useContext } from "react";

// import { AppContext } from "../../context/AppContext";

// import "./Rating.scss";

// function Input() {
//   const { data, currentScreen } = useContext(AppContext);

//   // console.log(data);

//   console.log(data[1].answerOptions);

//   // console.log(data[currentScreen].questionText);

//   // console.log(data[1].answerOptions[2].value);

//   return (
//     <div
//       className="question-container"
//       style={{
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="grid-of-">
//         {data[1].answerOptions.map((answerOption, index) => (
//           <>
//             <input
//               type="radio"
//               value="data[currentScreen].answerOptions[currentScreen].value"
//               name="item[answerText]"
//             />
//             <input
//               type="radio"
//               value="data[currentScreen].answerOptions[currentScreen].value"
//               name="item[answerText]"
//             />
//             <input
//               type="radio"
//               value="data[currentScreen].answerOptions[currentScreen].value"
//               name="item[answerText]"
//             />
//             <input
//               type="radio"
//               value="data[currentScreen].answerOptions[currentScreen].value"
//               name="item[answerText]"
//             />
//             <input
//               type="radio"
//               value="data[currentScreen].answerOptions[currentScreen].value"
//               name="item[answerText]"
//             />
//           </>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Input;
