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
    questionText: "Which is the variety in Spain most planted?",
    answerOptions: [
      { answerText: "Garnacha", isCorrect: false },
      { answerText: "Airén", isCorrect: false },
      { answerText: "Bobal", isCorrect: false },
      { answerText: "Tempranillo ", isCorrect: true },
      { answerText: "Albariño ", isCorrect: false },
    ],
    image: vinoCuna,
    id: 1,
  },
  {
    questionText: "Which is the region where the Garnacha was born?",
    answerOptions: [
      { answerText: "Aragón", isCorrect: true },
      { answerText: "Cataluña", isCorrect: false },
      { answerText: "Rioja", isCorrect: false },
    ],
    image: fondoPizarras,
    id: 2,
  },
  {
    questionText:
      "Talking about Aragon, which of the following wine regions belong to it?",

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
  },
  {
    questionText: "Select the five grape varieties from Spain?",

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
  },
  {
    questionText: "Is it Rufete red, white or both?",
    answerOptions: [
      { answerText: "White", isCorrect: false },
      { answerText: "Red", isCorrect: false },
      { answerText: "Both", isCorrect: true },
    ],
    image: RaicesMalvar,
    id: 5,
  },
  {
    questionText: "Is Albarin related to Albariño?",
    answerOptions: [
      { answerText: "Yes", isCorrect: false },
      { answerText: "No", isCorrect: true },
    ],
    image: RaicesMalvar1,
    id: 6,
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
  },
  {
    questionText: "Mazuela is from?",
    answerOptions: [
      { answerText: "Rioja", isCorrect: false },
      { answerText: "Cariñena", isCorrect: false },
      { answerText: "Priorat", isCorrect: false },
      { answerText: "All", isCorrect: true },
    ],
    image: Cepa,
    id: 8,
  },
];

export default questions;
