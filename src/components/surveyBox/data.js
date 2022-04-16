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
      { answerText: "Grass", isCorrect: true },
      { answerText: "Honeysuckle ", isCorrect: false },
      { answerText: "Fennel", isCorrect: false },
      { answerText: "Mineral ", isCorrect: false },
      { answerText: "Jasmine", isCorrect: false },
    ],
    input: "Others...",
    image: vinoCuna,
    id: 1,
    correctQty:1
  },
  {
    questionText: "| Intensity",
    answerOptions: [
      { answerText: "1", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "2", isCorrect: true, value: [1, 2, 3, 4, 5] },
      { answerText: "3", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "4", isCorrect: true, value: [1, 2, 3, 4, 5] },
    ],
    image: fondoPizarras,
    id: 2,
    correctQty:1
  },
  {
    questionText: "| Sweetness",
    answerOptions: [
      { answerText: "1", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "2", isCorrect: true, value: [1, 2, 3, 4, 5] },
      { answerText: "3", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "4", isCorrect: true, value: [1, 2, 3, 4, 5] },
    ],
    image: fondoPizarras,
    id: 3,
    correctQty:1
  },
  {
    questionText: "| Body",
    answerOptions: [
      { answerText: "1", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "2", isCorrect: true, value: [1, 2, 3, 4, 5] },
      { answerText: "3", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "4", isCorrect: true, value: [1, 2, 3, 4, 5] },
      // { answerText: "5", isCorrect: false, value: [1, 2, 3, 4, 5] },
    ],
    image: fondoPizarras,
    id: 4,
    correctQty:1
  },
  {
    questionText: "| Acidity",
    answerOptions: [
      { answerText: "1", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "2", isCorrect: true, value: [1, 2, 3, 4, 5] },
      { answerText: "3", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "4", isCorrect: true, value: [1, 2, 3, 4, 5] },
      // { answerText: "5", isCorrect: false, value: [1, 2, 3, 4, 5] },
    ],
    image: fondoPizarras,
    id: 5,
    correctQty:1
  },
  {
    questionText: "| Alcohol",
    answerOptions: [
      { answerText: "1", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "2", isCorrect: true, value: [1, 2, 3, 4, 5] },
      { answerText: "3", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "4", isCorrect: true, value: [1, 2, 3, 4, 5] },
    ],
    image: fondoPizarras,
    id: 6,
    correctQty:1
  },
  {
    questionText: "| Length",
    answerOptions: [
      { answerText: "1", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "2", isCorrect: true, value: [1, 2, 3, 4, 5] },
      { answerText: "3", isCorrect: false, value: [1, 2, 3, 4, 5] },
      { answerText: "4", isCorrect: true, value: [1, 2, 3, 4, 5] },
    ],
    image: fondoPizarras,
    id: 7,
    correctQty:1
  },
  {
    questionText: "If you would need to guess the vintage:",
    answerOptions: [
      { answerText: "2018", isCorrect: false },
      { answerText: "2019", isCorrect: false },
      { answerText: "2020", isCorrect: false },
      { answerText: "2021", isCorrect: false },
    ],
    esRadio: true,
    image: Raices1,
    id: 8,
    correctQty:1
  },
  {
    questionText:
      "Now you have taste it, select which three varieties could be:",
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
    id: 9,
    correctQty:3
  },
  {
    questionText: "From the regions listen below, pick the ones that could be:",
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
    id: 10,
    correctQty:1
  },
];

export default data;
