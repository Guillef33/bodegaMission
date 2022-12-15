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
      { answerText: "REDCURRANT", isCorrect: false },
      { answerText: "BLACKBERRY", isCorrect: false },
      { answerText: "LIQUORICE", isCorrect: true },
      { answerText: "STRAWBERRY ", isCorrect: false },
      { answerText: "VANILLA", isCorrect: false },
      { answerText: "PRUNE", isCorrect: true },
      { answerText: "LEATHER", isCorrect: false },
      { answerText: "CARAMEL ", isCorrect: false },
      { answerText: "CHOCOLATE ", isCorrect: false },
      { answerText: "BLACKPEPPER", isCorrect: false },
      { answerText: "MINT ", isCorrect: false },
      { answerText: "PINE", isCorrect: false },
      { answerText: "GREEN PEPPER ", isCorrect: false },
    ],
    input: "Others...",
    image: vinoCuna,
    id: 1,
    correctQty: 16,
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
    correctQty: 1,
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
    correctQty: 1,
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
    correctQty: 1,
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
    correctQty: 1,
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
    correctQty: 1,
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
    correctQty: 1,
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
    correctQty: 1,
  },
  {
    questionText:
      "Now you have tasted it, select which three varieties it could be:",
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
    correctQty: 3,
  },
  {
    questionText:
      "From the regions listed below, pick the ones you think the wine could find its origins:",
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
    correctQty: 10,
  },
];

export default data;
