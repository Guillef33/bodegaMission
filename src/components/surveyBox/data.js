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
      { answerText: "Redcurrant", isCorrect: false },
      { answerText: "Blackberry", isCorrect: false },
      { answerText: "Liquorice", isCorrect: true },
      { answerText: "Strawberry", isCorrect: false },
      { answerText: "Vainilla", isCorrect: false },
      { answerText: "Prune", isCorrect: true },
      { answerText: "Leather", isCorrect: false },
      { answerText: "Caramel", isCorrect: false },
      { answerText: "Chocolate ", isCorrect: false },
      { answerText: "Blackpepper", isCorrect: false },
      { answerText: "Mint", isCorrect: false },
      { answerText: "Pine", isCorrect: false },
      { answerText: "Green Pepper", isCorrect: false },
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
    questionText: "| Fruit",
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
      { answerText: "Tempranillo", isCorrect: true },
      { answerText: "Garnacha   ", isCorrect: false },
      { answerText: "Syrah", isCorrect: false },
      { answerText: "Graciano", isCorrect: true },
      { answerText: "Mencia", isCorrect: false },
      { answerText: "Bobal", isCorrect: false },
      { answerText: "Rufete", isCorrect: true },
      { answerText: "Prieto Picudo", isCorrect: false },
      { answerText: "Juan Garcia", isCorrect: false },
      { answerText: "C. Sauvignon", isCorrect: false },
      { answerText: "Monastrell", isCorrect: false },
      { answerText: "Macabeo", isCorrect: false },
    ],
    image: RaicesMalvar,
    id: 9,
    correctQty: 3,
  },
  {
    questionText:
      "From the regions listed below, pick the ones you think the wine could find its origins:",
    answerOptions: [
      { answerText: "Terra Alta", isCorrect: false },
      { answerText: "Rias Baixas", isCorrect: false },
      { answerText: "El Bierzo", isCorrect: false },
      { answerText: "Utiel-Requena", isCorrect: false },
      { answerText: "Tierra de León", isCorrect: true },
      { answerText: "Vinos de Madrid", isCorrect: false },
      { answerText: "Ribera Sacra", isCorrect: false },
      { answerText: "Sierra de Salamanca", isCorrect: false },
      { answerText: "Rueda", isCorrect: false },
      { answerText: "Penedes", isCorrect: false },
      { answerText: "Rioja", isCorrect: false },
      { answerText: "Calatayud", isCorrect: false },
    ],
    image: RaicesMalvar1,
    id: 10,
    correctQty: 10,
  },
  {
    questionText: "| Oak",
    answerOptions: [
      { answerText: "1", value: [1, 2, 3, 4, 5] },
      { answerText: "2", value: [1, 2, 3, 4, 5] },
      { answerText: "3", value: [1, 2, 3, 4, 5] },
      { answerText: "4", value: [1, 2, 3, 4, 5] },
    ],
    image: RaicesMalvar1,
    id: 11,
    correctQty: 1,
  },
  {
    questionText: "| Tannins",
    answerOptions: [
      { answerText: "1", value: [1, 2, 3, 4, 5] },
      { answerText: "2", value: [1, 2, 3, 4, 5] },
      { answerText: "3", value: [1, 2, 3, 4, 5] },
      { answerText: "4", value: [1, 2, 3, 4, 5] },
    ],
    image: RaicesMalvar1,
    id: 12,
    correctQty: 1,
  },
  {
    questionText: "| Length",
    answerOptions: [
      { answerText: "1", value: [1, 2, 3, 4, 5] },
      { answerText: "2", value: [1, 2, 3, 4, 5] },
      { answerText: "3", value: [1, 2, 3, 4, 5] },
      { answerText: "4", value: [1, 2, 3, 4, 5] },
    ],
    image: fondoPizarras,
    id: 13,
    correctQty: 1,
  },
];

export default data;
