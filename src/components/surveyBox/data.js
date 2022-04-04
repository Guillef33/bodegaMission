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
      { answerText: "GARNACHA BLANCA", isCorrect: true },
      { answerText: "ALBARIÑO", isCorrect: false },
      { answerText: "GODELLO", isCorrect: false },
      { answerText: "BOBAL", isCorrect: true },
      { answerText: "ALBARIN", isCorrect: false },
      { answerText: "ALBILLO", isCorrect: false },
      { answerText: "MALVAR", isCorrect: true },
      { answerText: "MENCÍA", isCorrect: false },
      { answerText: "RUFETE", isCorrect: false },
      { answerText: "VERDEJO", isCorrect: false },
    ],
    image: RaicesMalvar,
    id: 5,
  },
  {
    questionText: "From the regions listen below, picj the ones that could be",
    answerOptions: [
      { answerText: "TERRA ALTA", isCorrect: true },
      { answerText: "RIAS BAIXAS", isCorrect: false },
      { answerText: "EL BIERZO", isCorrect: true },
      { answerText: "UTIEL-REQUENA", isCorrect: false },
      { answerText: "TIERRA DE LEON", isCorrect: true },
      { answerText: "CIGALES", isCorrect: false },
      { answerText: "MADRID", isCorrect: true },
      { answerText: "RIBERA SACRA", isCorrect: false },
      { answerText: "SIERRA DE SALAMANCA", isCorrect: true },
      { answerText: "RUEDA", isCorrect: false },
    ],
    image: RaicesMalvar1,
    id: 6,
  },
];

export default data;
