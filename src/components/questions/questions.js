// Nuevas Imagenes
import vinoCuna from "../../assets/vinoCuna.jpg";
import fondoPizarras from "../../assets/fondoPizarras.jpg";
import fondoPaisaje from "../../assets/fondoPaisaje.jpg";

import Raices1 from "../../assets/Raices1.png";
import RaicesMalvar from "../../assets/RaicesMalvar.png";
import RaicesMalvar1 from "../../assets/RaicesMalvar1.png";
import CRPunto from "../../assets/CRPunto.png";
import Cepa from "../../assets/Cepa.png";

const questions = [
  {
    questionTitle: "GRACIANO IS A SPANISH GRAPE VARIETY",
    questionText:
      "That adds “Grace” when used in blends, both in terms of aroma and taste. It can mainly be found in:",
    answerOptions: [
      { answerText: "Ribera", isCorrect: false },
      { answerText: "Penedes", isCorrect: false },
      { answerText: "Castilla La Mancha", isCorrect: false },
      { answerText: "Campo de Borja", isCorrect: false },
      { answerText: "Rioja ", isCorrect: true },
      { answerText: "Navarra ", isCorrect: false },
    ],
    image: vinoCuna,
    id: 1,
    correctQty: 1,
  },
  {
    questionText: "In what region was the garnacha grape born?",
    answerOptions: [
      { answerText: "Aragón", isCorrect: true },
      { answerText: "Cataluña", isCorrect: false },
      { answerText: "Rioja", isCorrect: false },
    ],
    image: fondoPizarras,
    id: 2,
    correctQty: 1,
  },
  {
    questionText:
      "Let’s talk about the Aragon province. Which of the following wine regions belong to it?",

    answerOptions: [
      { answerText: "Calatayud", isCorrect: true },
      { answerText: "Utiel-Requena", isCorrect: false },
      { answerText: "Yecla", isCorrect: false },
      { answerText: "Cariñena", isCorrect: true },
      { answerText: "Cigales", isCorrect: false },
      { answerText: "Somontano", isCorrect: true },
      { answerText: "Pla de Bages", isCorrect: false },
      { answerText: "Campo de Borja", isCorrect: true },
      { answerText: "Arlanza", isCorrect: false },
      { answerText: "Bierzo", isCorrect: false },
    ],
    image: fondoPaisaje,
    id: 3,
    correctQty: 4,
  },
  {
    // cinco correctas
    questionText: "Select the five indigenous grape varieties from Spain:",

    answerOptions: [
      { answerText: "Albillo", isCorrect: true },
      { answerText: "Aspiran", isCorrect: false },
      { answerText: "Carménère", isCorrect: false },
      { answerText: "Garnacha", isCorrect: true },
      { answerText: "Albarin", isCorrect: true },
      { answerText: "Elvira", isCorrect: false },
      { answerText: "Rufete", isCorrect: true },
      { answerText: "Malvar", isCorrect: true },
      { answerText: "Olivella", isCorrect: false },
      { answerText: "Cesar", isCorrect: false },
    ],
    image: Raices1,
    id: 4,
    correctQty: 5,
  },
  {
    questionText: "Is Rufete a red or white grape variety? Or both?",
    answerOptions: [
      { answerText: "White", isCorrect: false },
      { answerText: "Red", isCorrect: false },
      { answerText: "Both", isCorrect: true },
    ],
    image: RaicesMalvar,
    id: 5,
    correctQty: 1,
  },
  {
    questionText: "Is Albarin related to Albariño?",
    answerOptions: [
      { answerText: "Yes", isCorrect: false },
      { answerText: "No", isCorrect: true },
    ],
    image: RaicesMalvar1,
    id: 6,
    correctQty: 1,
  },
  {
    questionText: "Malvar is a variety that can be found in?",
    answerOptions: [
      { answerText: "Madrid", isCorrect: true },
      { answerText: "Jerez", isCorrect: false },
      { answerText: "Galicia", isCorrect: false },
    ],
    image: CRPunto,
    id: 7,
    correctQty: 1,
  },
  {
    // tres correctas
    questionText: "Mazuela is from?",
    answerOptions: [
      { answerText: "Rioja", isCorrect: true },
      { answerText: "Rías Baixas", isCorrect: false },
      { answerText: "Valdeorras", isCorrect: false },
      { answerText: "Madrid", isCorrect: false },
      { answerText: "Cariñena", isCorrect: true },
      { answerText: "Priorat", isCorrect: true },
    ],
    image: Cepa,
    id: 8,
    correctQty: 3,
  },
];

export default questions;
