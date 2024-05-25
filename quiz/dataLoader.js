const QUIZES_KEY = "quizes";

const initialData = [
  {
    id: 0,
    name: "Biology questionary",
    questions: [
      {
        id: `1_1`,
        nextId: "1_2",
        question: "Ra aris mitoqondria?",
        answers: [
          {
            title: "a",
            value: "Ateefis sintezi",
            correct: true,
          },
          {
            title: "b",
            value: "Baqteria",
            correct: false,
          },
          {
            title: "c",
            value: "Ujredi",
            correct: false,
          },
          {
            title: "d",
            value: "Qromosoma",
            correct: false,
          },
        ],
      },
      {
        id: `1_2`,
        nextId: "1_3",
        question: "Romeli qromosoma gansazgvravs sqess?",
        answers: [
          {
            title: "a",
            value: "20",
            correct: false,
          },
          {
            title: "b",
            value: "21",
            correct: false,
          },
          {
            title: "c",
            value: "23",
            correct: true,
          },
          {
            title: "d",
            value: "22",
            correct: false,
          },
        ],
      },
      {
        id: `1_3`,
        nextId: "1_4",
        question: "Adamianis yvelaze didi organoa",
        answers: [
          {
            title: "a",
            value: "vena",
            correct: false,
          },
          {
            title: "b",
            value: "Filtvi",
            correct: false,
          },
          {
            title: "c",
            value: "Fexi",
            correct: false,
          },
          {
            title: "d",
            value: "Kani",
            correct: true,
          },
        ],
      },
      {
        id: `1_4`,
        nextId: "1_5",
        question: "ra aris Hemofilia",
        answers: [
          {
            title: "a",
            value: "Sisxldzagvta daavadeba",
            correct: false,
          },
          {
            title: "b",
            value: "Eritrocitebis daavadeba",
            correct: false,
          },
          {
            title: "c",
            value: "Leikocitebis daavadeba",
            correct: false,
          },
          {
            title: "d",
            value: "Trombocitebis daavadeba",
            correct: true,
          },
        ],
      },
      {
        id: `1_5`,
        nextId: null,
        question: "Ramdeni Dzvali aqvs adamians",
        answers: [
          {
            title: "a",
            value: " 204",
            correct: false,
          },
          {
            title: "b",
            value: "205",
            correct: false,
          },
          {
            title: "c",
            value: "206",
            correct: true,
          },
          {
            title: "d",
            value: "207",
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Math questionary",
    questions: [
      {
        id: "1_1",
        question: "2*4?",
        answers: [
          {
            title: "a",
            value: "8",
            correct: true,
          },
          {
            title: "b",
            value: "12",
            correct: false,
          },
          {
            title: "c",
            value: "9",
            correct: false,
          },
          {
            title: "d",
            value: "6",
            correct: false,
          },
        ],
      },
      {
        id: `2_2`,
        question: "(6*6)/4",
        answers: [
          {
            title: "a",
            value: "12",
            correct: false,
          },
          {
            title: "b",
            value: "9",
            correct: true,
          },
          {
            title: "c",
            value: "6",
            correct: false,
          },
          {
            title: "d",
            value: "16",
            correct: false,
          },
        ],
      },
      {
        id: `2_3`,
        question: "95/5",
        answers: [
          {
            title: "a",
            value: "15",
            correct: false,
          },
          {
            title: "b",
            value: "17",
            correct: false,
          },
          {
            title: "c",
            value: "16",
            correct: false,
          },
          {
            title: "d",
            value: "19",
            correct: true,
          },
        ],
      },
      {
        id: `2_4`,
        question: "Calculate 40% of 200",
        answers: [
          {
            title: "a",
            value: "75",
            correct: false,
          },
          {
            title: "b",
            value: "80",
            correct: true,
          },
          {
            title: "c",
            value: "60",
            correct: false,
          },
          {
            title: "d",
            value: "70",
            correct: false,
          },
        ],
      },
      {
        id: `2_5`,
        question: "Ras udris samkutxedis kutxeebis jami",
        answers: [
          {
            title: "a",
            value: "160",
            correct: false,
          },
          {
            title: "b",
            value: "360",
            correct: false,
          },
          {
            title: "c",
            value: "30",
            correct: false,
          },
          {
            title: "d",
            value: "180",
            correct: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Geography questionary",
    questions: [
      {
        id: `3_1`,
        question: `Yvelaze didi udabno`,
        answers: [
          {
            title: "a",
            value: "Sahara",
            correct: false,
          },
          {
            title: "b",
            value: "Gobi's",
            correct: false,
          },
          {
            title: "c",
            value: "Antarctica",
            correct: true,
          },
          {
            title: "d",
            value: "Chadi",
            correct: false,
          },
        ],
      },
      {
        id: `3_2`,
        question: `Yvelaze patara Saxelmwifo`,
        answers: [
          {
            title: "a",
            value: "Monaco",
            correct: false,
          },
          {
            title: "b",
            value: "Vatican",
            correct: true,
          },
          {
            title: "c",
            value: "Laos",
            correct: false,
          },
          {
            title: "d",
            value: "Montenegro",
            correct: false,
          },
        ],
      },
      {
        id: `3_3`,
        question: `Yvelaze Mcidrod dasaxlebuli qveyana`,
        answers: [
          {
            title: "a",
            value: "Indoeti",
            correct: false,
          },
          {
            title: "b",
            value: "Chineti",
            correct: false,
          },
          {
            title: "c",
            value: "Bangladeshi",
            correct: true,
          },
          {
            title: "d",
            value: "Ruseti",
            correct: false,
          },
        ],
      },
      {
        id: `3_4`,
        question: `Ramdenia Everestis simagle`,
        answers: [
          {
            title: "a",
            value: "8854",
            correct: false,
          },
          {
            title: "b",
            value: "8848",
            correct: true,
          },
          {
            title: "c",
            value: "8846",
            correct: false,
          },
          {
            title: "d",
            value: "8844",
            correct: false,
          },
        ],
      },
      {
        id: `3_5`,
        question: `Yvelaze Didi Kontinentia`,
        answers: [
          {
            title: "a",
            value: "Evropa",
            correct: false,
          },
          {
            title: "b",
            value: "Avstralia",
            correct: false,
          },
          {
            title: "c",
            value: "Azia",
            correct: false,
          },
          {
            title: "d",
            value: "Africa",
            correct: true,
          },
        ],
      },
    ],
  },
];

const initilLocalstorageData = localStorage.getItem(QUIZES_KEY);
if (!initilLocalstorageData) {
  localStorage.setItem(QUIZES_KEY, JSON.stringify(initialData));
}

function getLocalStorageValue(key) {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
}

function getQuizById(quizId) {
  const data = getLocalStorageValue(QUIZES_KEY);
  const quiz = data.find((quiz) => quiz.id === quizId);
  return quiz;
}
