import vinoCuna from "../../assets/vinoCuna.jpg";
import fondoPizarras from "../../assets/fondoPizarras.jpg";
import fondoPaisaje from "../../assets/fondoPaisaje.jpg";
import Raices1 from "../../assets/Raices1.png";
import RaicesMalvar from "../../assets/RaicesMalvar.png";
import RaicesMalvar1 from "../../assets/RaicesMalvar1.png";

const data = [
  {
    questionText: " Nose & Palate Impression | Aromas",
    answerOptions: [
      { answerText: "Pear/ apple", isCorrect: false },
      { answerText: "Lychee", isCorrect: false },
      { answerText: "Melon", isCorrect: true },
      { answerText: "Pineapple ", isCorrect: false },
      { answerText: "Citrus ", isCorrect: false },
      { answerText: "Zest", isCorrect: false },
      { answerText: "Apricot", isCorrect: false },
      { answerText: "White peach", isCorrect: true },
      { answerText: "Fresh almonds ", isCorrect: false },
      { answerText: "Banana ", isCorrect: false },
      { answerText: "Vanilla ", isCorrect: false },
      { answerText: "Apple Blossom", isCorrect: false },
      { answerText: "Jasmine", isCorrect: false },
      { answerText: "White peach", isCorrect: true },
      { answerText: "Honeysuckle ", isCorrect: false },
      { answerText: "Orange Blossom", isCorrect: false },
    ],
    input: "Others...",
    image: vinoCuna,
    id: 1,
  },
  {
    questionText: "Nose & Palate Impression | Evaluation",
    answerOptions: [
      { answerText: "Intensity", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "Swetness", isCorrect: true, value: [1, 2, 3, 4, 5] },
      { answerText: "Body", isCorrect: false, value: [1, 2, 3, 4, 5] },
    ],
    image: fondoPizarras,
    id: 2,
  },
  {
    questionText: "Nose & Palate Impression | Evaluation",

    answerOptions: [
      { answerText: "Acidity", isCorrect: true, value: [1, 2, 3, 4, 5] },
      { answerText: "Alcohol", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "Lenght", isCorrect: false, value: [1, 2, 3, 4, 5] },
    ],
    esRadio: true,
    image: fondoPaisaje,
    id: 3,
  },
  {
    questionText: "If you would need to guess the vintage:",

    answerOptions: [
      { answerText: "2018", isCorrect: false },
      { answerText: "2020", isCorrect: false },
      { answerText: "2021", isCorrect: false },
    ],
    esRadio: true,
    image: Raices1,
    id: 4,
  },

  {
    questionText:
      "Now you have taste it, select which three varieties could be",
    answerOptions: [
      { answerText: "Garnacha Blanca", isCorrect: true },
      { answerText: "Albariño ", isCorrect: false },
      { answerText: "Godello", isCorrect: false },
      { answerText: "Bobal", isCorrect: true },
      { answerText: "Albarin", isCorrect: false },
      { answerText: "Albillo", isCorrect: false },
      { answerText: "Malvar", isCorrect: true },
      { answerText: "Mencía", isCorrect: false },
      { answerText: "Rufete", isCorrect: false },
      { answerText: "Verdejo", isCorrect: false },
    ],
    image: RaicesMalvar,
    id: 5,
  },
  {
    questionText: "From the regions listen below, pick the ones that could be",
    answerOptions: [
      { answerText: "Terra Alta", isCorrect: true },
      { answerText: "Rias Baixas", isCorrect: false },
      { answerText: "El Bierzo", isCorrect: true },
      { answerText: "Utiel-Requena", isCorrect: false },
      { answerText: "Tierra de León", isCorrect: true },
      { answerText: "Cigales", isCorrect: false },
      { answerText: "Madrid", isCorrect: true },
      { answerText: "Ribera Sacra", isCorrect: false },
      { answerText: "Sierra de Salamanca", isCorrect: true },
      { answerText: "Rueda", isCorrect: false },
    ],
    image: RaicesMalvar1,
    id: 6,
  },
];

export default data;
