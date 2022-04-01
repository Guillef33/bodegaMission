import vinoCuna from "../../assets/vinoCuna.jpg";
import fondoPizarras from "../../assets/fondoPizarras.jpg";
import fondoSombras from "../../assets/fondoSombras.png";
import fondoVinedo from "../../assets/fondoVinedo.jpg";
import fondoPaisaje from "../../assets/fondoPaisaje.jpg";

import Paisaje from "../../assets/Paisaje.png";
import Raices1 from "../../assets/Raices1.png";
import RaicesMalvar from "../../assets/RaicesMalvar.png";
import RaicesMalvar1 from "../../assets/RaicesMalvar1.png";
import CRPunto from "../../assets/CRPunto.png";
import Cepa from "../../assets/Cepa.png";

const data = [
  {
    questionText: "NOSE & PALATE IMPRESSION | AROMAS",
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
    image: vinoCuna,
    id: 1,
  },
  {
    questionText: "NOSE & PALATE IMPRESSION | EVALUATION",
    answerOptions: [
      { answerText: "Intensity", isCorrect: false },
      { answerText: "Swetness", isCorrect: true },
      { answerText: "Body", isCorrect: false },
    ],
    image: fondoPizarras,
    id: 2,
  },
  {
    questionText: "NOSE & PALATE IMPRESSION | EVALUATION",

    answerOptions: [
      { answerText: "Acidity", isCorrect: true },
      { answerText: "Alcohol", isCorrect: false },
      { answerText: "Lenght", isCorrect: false },
    ],
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
    image: Raices1,
    id: 4,
  },

  {
    questionText: "NOW YOU HAVE TASTE IT, SELECT WHICH 3 VARIETIES COULD BE ",
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
    questionText: "FROM THE REGIONS LISTED BELOW, PICK THE ONES THAT COULD BE",
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
