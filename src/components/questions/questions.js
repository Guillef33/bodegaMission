
// Nuevas Imagenes
import vinoCuna from "../../assets/vinoCuna.jpg";
import fondoPizarras from "../../assets/fondoPizarras.jpg";
import fondoSombras from "../../assets/fondoSombras.png";
import fondoVinedo from "../../assets/fondoVinedo.jpg";
import fondoPaisaje from "../../assets/fondoPaisaje.jpg";



const questions = [
  {
    questionText: "Which is the variety in Spain most planted?",
    answerOptions: [
      { answerText: "Garnacha", isCorrect: false },
      { answerText: "Airén", isCorrect: true },
      { answerText: "Bobal", isCorrect: false },
      { answerText: "Tempranillo ", isCorrect: false },
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
      { answerText: "Campo de Borja", isCorrect: true },
      { answerText: "Yecla", isCorrect: false },
      { answerText: "Cariñena", isCorrect: true },
      { answerText: "Cigales", isCorrect: false },
      { answerText: "Somontano", isCorrect: true },
      { answerText: "Pla de Bages", isCorrect: true },
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
      { answerText: "Pla de Bages", isCorrect: false },
      { answerText: "Arlanza", isCorrect: false },
      { answerText: "Bierzo", isCorrect: false },
      { answerText: "Calatayud", isCorrect: true },
      { answerText: "Utiel-Requena", isCorrect: false },
      { answerText: "Campo de Borja", isCorrect: false },
      { answerText: "Yecla", isCorrect: false },
      { answerText: "Cariñena", isCorrect: true },
    ],
    image: fondoPaisaje,
    id: 4,
  },
  {
    questionText: "Is it Rufete red, white or both?",
    answerOptions: [
      { answerText: "White", isCorrect: false },
      { answerText: "Red", isCorrect: false },
      { answerText: "Both", isCorrect: true },
    ],
    image: fondoPaisaje,
    id: 5,
  },
  {
    questionText: "Is Albarin related to Albariño?",
    answerOptions: [
      { answerText: "Yes", isCorrect: false },
      { answerText: "No", isCorrect: true },
    ],
    image: fondoPaisaje,
    id: 6,
  },
  {
    questionText: "Malvar is a variety that can be found in?",
    answerOptions: [
      { answerText: "Madrid", isCorrect: true },
      { answerText: "Jerez", isCorrect: false },
      { answerText: "Galicia", isCorrect: false },
    ],
    image: fondoPaisaje,
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
    image: fondoPaisaje,
    id: 8,
  },
];

export default questions;
