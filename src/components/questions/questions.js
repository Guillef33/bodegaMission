// Nuevas Imagenes
import vinoCuna from "../../assets/vinoCuna.jpg";
import fondoPizarras from "../../assets/fondoPizarras.jpg";
import fondoSombras from "../../assets/fondoSombras.png";
import fondoVinedo from "../../assets/fondoVinedo.jpg";
import fondoPaisaje from "../../assets/fondoPaisaje.jpg";

import Paisaje from '../../assets/Paisaje.png';
import Raices1 from '../../assets/Raices1.png';
import RaicesMalvar from '../../assets/RaicesMalvar.png';
import RaicesMalvar1 from '../../assets/RaicesMalvar1.png'
import CRPunto from "../../assets/CRPunto.png";
import Cepa from "../../assets/Cepa.png";

const questions = [
  {
    questionText: "Which is the variety in Spain most planted?",
    answerOptions: [
      { answerText: "Garnacha", isCorrect: false },
      { answerText: "Airen", isCorrect: false },
      { answerText: "Bobal", isCorrect: true },
      { answerText: "Tempranillo ", isCorrect: false },
      { answerText: "Albariño ", isCorrect: false },
    ],
    image: vinoCuna,
    id: 1,
  },
  {
    questionText: "Which is the region where the Garnacha was born?",
    answerOptions: [
      { answerText: "Aragón", isCorrect: false },
      { answerText: "Cataluña", isCorrect: true },
      { answerText: "Rioja", isCorrect: false },
    ],
    image: fondoPizarras,
    id: 2,
  },
  {
    questionText:
      "Talking about Aragon, which of the following wine regions belong to the region?",

    answerOptions: [
      { answerText: "Calatayud", isCorrect: true },
      { answerText: "Utiel Requena", isCorrect: false },
      { answerText: "Campo de Borja", isCorrect: false },
      { answerText: "Yecla", isCorrect: false },
      { answerText: "Cariñena", isCorrect: true },
      { answerText: "Cigales", isCorrect: true },
      { answerText: "Somontano", isCorrect: false },
      { answerText: "Pla de bages", isCorrect: true },
      { answerText: "Arlanza", isCorrect: false },
      { answerText: "Bierzo", isCorrect: true },
    ],
    image: fondoPaisaje,
    id: 3,
  },
  {
    questionText: "Select five autochthonous varieties from Spain?",

    answerOptions: [
      { answerText: "Cigales", isCorrect: false },
      { answerText: "Somontano", isCorrect: false },
      { answerText: "Pla de bages", isCorrect: false },
      { answerText: "Arlanza", isCorrect: false },
      { answerText: "Bierzo", isCorrect: false },
      { answerText: "Calatayud", isCorrect: true },
      { answerText: "Utiel Requena", isCorrect: false },
      { answerText: "Campo de Borja", isCorrect: false },
      { answerText: "Yecla", isCorrect: false },
      { answerText: "Cariñena", isCorrect: true },
    ],
    image: Raices1,
    id: 4,
  },
  {
    questionText: "Is it Rufete red, white or both?",
    answerOptions: [
      { answerText: "White", isCorrect: true },
      { answerText: "Red", isCorrect: false },
      { answerText: "Both", isCorrect: false },
    ],
    image: RaicesMalvar,
    id: 5,
  },
  {
    questionText: "Is Albarin related to Albariño?",
    answerOptions: [
      { answerText: "Yes", isCorrect: true },
      { answerText: "No", isCorrect: false },
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
      { answerText: "Cariñena", isCorrect: true },
      { answerText: "Priorat", isCorrect: false },
      { answerText: "All", isCorrect: true },
    ],
    image: Cepa,
    id: 8,
  },
];

export default questions;
