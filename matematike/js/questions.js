// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Nëse a + b = 20 dhe ax + bx = 80. Sa është vlera e x – it ?",
    answer: "4",
    options: [
      "8",
      "4",
      "9 + 5",
      "2"
    ]
  },
    {
    numb: 2,
    question: "Nëse a^2 = 2012, sa është vlera e shprehjes (a +1)(a -1) -2011 ?",
    answer: "0",
    options: [
      "-2",
      "4000",
      "8",
      "0"
    ]
  },
    {
    numb: 3,
    question: "Cila është moda për të dhënat vijuese 5, 7, 6, 3, 1, 7, 9, 5, 10, 7 ?",
    answer: "7",
    options: [
      "4",
      "6.5",
      "7",
      "7.5"
    ]
  },
    {
    numb: 4,
    question: "Një lokal ka syprinën 72 metra katror. Syprina rritet edhe për 25% . Sa metra katror do t'i ketë lokali?",
    answer: "90 metra katror",
    options: [
      "120 metra katror",
      "50 metra katror",
      "90 metra katror",
      "70 metra katror"
    ]
  },
    {
    numb: 5,
    question: "Për transportimin e një sasie të thëngjillit nevojiten 24 kamionë me fuqi transportuese 14 tonëshe. Sa kamionë me fuqi bartëse 16 tonëshe do të ishin të nevojshëm për transportimin e sasisë së njëjtë të thëngjillit?",
    answer: "21",
    options: [
      "30",
      "21",
      "19",
      "40"
    ]
  },
    {
    numb: 6,
    question: "Një mall shtrenjtohet për 20 % . Pas disa ditsh lirohet për 20 % . Cila pohim është i saktë?",
    answer: "Kthehet në çmimin më të ultë se ai fillestar.",
    options: [
      "Kthehet në çmimin fillestar.",
      "Kthehet në çmimin më të lartë se ai fillestar.",
      "Kthehet në çmimin më të ultë se ai fillestar.",
      "Kthehet në çmimin për 2% më të lartë se ai fillestar."
    ]
  },
    {
    numb: 7,
    question: "Në figurën e dhënë pika U është ndërmjet pikave V dhe T . Nëse VT = 31 njësi matëse, sa është gjatësia e segmentit UT ?",
    answer: "UT=19",
    options: [
      "UT=19",
      "UT=18",
      "UT=17",
      "UT=16"
    ]
  },
    {
    numb: 8,
    question: "Është dhënë bashkësia e numrave {2, 4, 6, 8}. Sa numra dyshifrorë natyrorë mund të formohen prej tyre ashtu që shifrat mos të përsëriten ?",
    answer: "12",
    options: [
      "6",
      "12",
      "16",
      "20",
    ]
  },
    {
    numb: 9,
    question: "Është dhënë bashkësia e numrave {2, 4, 6, 8}. Sa numra dyshifrorë natyrorë mund të formohen prej tyre ashtu që shifrat mos të përsëriten ?",
    answer: "(p /\ q) \/ r",
    options: [
      "(p /\ q) /\ r",
      "(p \/ q) /\ r",
      "(p /\ q) \/ r",
      "(p \/ q) \/ r",
    ]
  },
    {
    numb: 10,
    question: "Klasa ka 30 nxënësve , secili prej tyre flet të pakten njëren gjuhë (frangjisht ose anglisht), 8 nxënës dijnë vetëm anglisht po aq edhe vetëm frengjisht. Sa nxënës dijnë dy gjuhët ?",
    answer: "14",
    options: [
      "22",
      "16",
      "14",
      "15",
    ]
  },
    {
    numb: 11,
    question: "Inekuacioni -2x < -6 është i njëvlershëm me :",
    answer: "x>3",
    options: [
      "x>3",
      "x",
      "x->2",
      "x->5",
    ]
  },
    {
    numb: 12,
    question: "Dy zare hedhen njëkohësisht. Sa është probabiliteti i ngjarjes që shuma e numrave të rënë të  jetë jo më shumë se 4 ?",
    answer: "1/6",
    options: [
      "1/3",
      "1/2",
      "1/6",
      "1/9",
    ]
  },
    {
    numb: 13,
    question: "Janë dhënë pikat A(-1,2) dhe B(1,4). Pika C është mesi i segmentit AB.Ordinata e pikës C është :",
    answer: "3",
    options: [
      "4",
      "3",
      "2",
      "1",
    ]
  },
    {
    numb: 14,
    question: "Cilat nga vlerat e mëposhtme nuk është në bashkësinë e zgjidhjeve të inekuacionit (3 - x)(x + 5) > 0",
    answer: "3",
    options: [
      "-4",
      "3",
      "-3",
      "4",
    ]
  },
    {
    numb: 15,
    question: "Perimetri i një katrori është 16cm. Diametri i rrethit të brendashkruar të tij është :",
    answer: "4cm",
    options: [
      "8cm",
      "10cm",
      "4cm",
      "6cm",
    ]
  },
    {
    numb: 16,
    question: "Janë dhënë bashkësitë A = (- 5,2] dhe B = (1,6]  Prerja e tyre është bashkësia :",
    answer: "{1,2]",
    options: [
      "{-5,6]",
      "{1,2]",
      "[2,1]",
      "[6,2]",
    ]
  },
    {
    numb: 17,
    question: "Janë dhënë bashkësitë A = (- 5,2] dhe B = (1,6]  Prerja e tyre është bashkësia :",
    answer: "{1,2]",
    options: [
      "{-5,6]",
      "{1,2]",
      "[2,1]",
      "[6,2]",
    ]
  },
    {
    numb: 18,
    question: "Është dhënë progresioni aritmetik me kufizën e parë 2 dhe me diferencë të progresionit 3. Kufiza e dhjetë e tij është :",
    answer: "29",
    options: [
      "29",
      "45",
      "30",
      "10",
    ]
  },
    {
    numb: 19,
    question: "Tri kufizat e para të një progresioni aritmetik janë 8, 13, x-2 . Vlera e x-it është :",
    answer: "20",
    options: [
      "20",
      "10",
      "15",
      "27",
    ]
  },
    {
    numb: 20,
    question: "20% e numrit 250 është :",
    answer: "50",
    options: [
      "500",
      "50",
      "5000",
      "5",
    ]
  },
    {
    numb: 21,
    question: "Mesatarja aritmetike e numrave 2, 4, 7, 9, 13 është :",
    answer: "7",
    options: [
      "6",
      "9",
      "7",
      "8",
    ]
  },
    {
    numb: 22,
    question: "Moda në vargun e numrave 2,2,3,3,3,3,4,4,5,5,5 është",
    answer: "3",
    options: [
      "1",
      "3",
      "4",
      "5",
    ]
  },
    {
    numb: 23,
    question: "Koeficienti këndor i drejtëzës 2x-y+5=0 është : ",
    answer: "2",
    options: [
      "2",
      "5",
      "1",
      "4",
    ]
  },
    {
    numb: 24,
    question: "Drejtëza 2x-3y+6=0 e pret boshtin Ox në pikën e abshisës : ",
    answer: "-3",
    options: [
      "0",
      "-3",
      "5",
      "2",
    ]
  },
    {
    numb: 25,
    question: "Pikat A(1,0), B(2,0) dhe C(3, 0) janë pikat e një :",
    answer: "rrethi",
    options: [
      "parabole",
      "rrethi",
      "hiperbole",
      "drejtëze",
    ]
  },
    {
    numb: 26,
    question: "Është dhënë koni i drejtë rrethor me lartësi 6cm dhe përftuese 10cm. Rrezja e bazës së konit është : ",
    answer: "8cm",
    options: [
      "3cm",
      "4cm",
      "8cm",
      "6cm",
    ]
  },
    {
    numb: 27,
    question: "Janë dhënë numrat 0,1,2,3,4,5,6,7,8,9. Sa numra dyshifrorë , pa përsëritje shifrash mund të formohen me to: ",
    answer: "81",
    options: [
      "90",
      "81",
      "120",
      "71",
    ]
  },
    {
    numb: 28,
    question: "Numri i grupeve treshe që mund të formohen me pesë libra të ndryshëm është:",
    answer: "10",
    options: [
      "5",
      "10",
      "20",
      "6",
    ]
  },
    {
    numb: 29,
    question: "Probabiliteti i një ngjarjeje është x. Cilën nga vlerat e mëposhtme nuk mund të marrë x ?",
    answer: "1.1",
    options: [
      "1.1",
      "0.8",
      "0.4",
      "0",
    ]
  },
    {
    numb: 30,
    question: "Janë dhënë numrat 0,1,2,3,4,5,6,7,8,9. Sa numra dyshifrorë , pa përsëritje shifrash mund të formohen me to: ",
    answer: "81",
    options: [
      "90",
      "81",
      "120",
      "71",
    ]
  },
    {
    numb: 31,
    question: "Në një rreth janë dhënë 4 pika të ndryshme. Sa trekëndësha me kulme në ato pika mund të formohen ?",
    answer: "4",
    options: [
      "4",
      "2",
      "5",
      "3",
    ]
  },
    {
    numb: 32,
    question: "Sa trekëndësha mund të ndërtohen me 7 pika jokolineare?",
    answer: "1.73m",
    options: [
      "1.41 m",
      "2.71 m",
      "3.14 m",
      "1.73m",
    ]
  },
    {
    numb: 33,
    question: "Në cilin rast shprehja 15 -12 : 3 + 4 - [-(-2 ⋅ 4 + 1)] është njehsuar saktë?",
    answer: "15 - 12 : 3 + 4 - [-(-2 ⋅ 4 + 1)] = 15 - 4 + 4 - [8 - 1] = 15 - 7 = 8",
    options: [
      "15 -12 : 3 + 4 - [-(-2 ⋅ 4 + 1)] = 15 - 4 + 4 - [-8 -1] = 15 - 9 = 6",
      "15 -12 : 3 + 4 - [-(-2 ⋅ 4 + 1)] = 3 : 3 + 4 + 8 -1 = 1 +12 -1 = 12",
      "15 - 12 : 3 + 4 - [-(-2 ⋅ 4 + 1)] = 15 - 4 + 4 - [8 - 1] = 15 - 7 = 8",
      "15 -12 : 3 + 4 - [-(-2 ⋅ 4 +1)] = 3 + 4 + [-8 +1] = 7 + [-7] = 7 - 7 = 0",
    ]
  },
    {
    numb: 34,
    question: "Cili zbërthim i përgjigjet trinomit: x^2-3x+2?",
    answer: "1(x-2)(x-1)",
    options: [
      "(x+2)(x-1)",
      "1(x-2)(x-1)",
      "(x-2)(x+1)",
      "(x+2)(x+1)",
    ]
  },
    {
    numb: 35,
    question: "Sa është syprina e figurës OABCD ?",
    answer: "28",
    options: [
      "40",
      "24",
      "42",
      "28",
    ]
  },
    {
    numb: 36,
    question: "Cili prej diagrameve vijuese paraqet funksion ,, një – një” ?",
    answer: "IV",
    options: [
      "I",
      "II",
      "III",
      "IV",
    ]
  },
    {
    numb: 37,
    question: "Sa është vlera e log(2x - 2) = 4 ?",
    answer: "5001",
    options: [
      "501",
      "788",
      "5001",
      "4998",
    ]
  },
    {
    numb: 38,
    question: "Është dhënë funksioni f(x) = 2x - ln(sin x). Sa është f '(x) ?",
    answer: "f '(x) = 2 - cot x",
    options: [
      "f '(x) = 2 - ln(sin x)",
      "f '(x) = 2 - cot x",
      "f '(x) = 2 - tan x",
      "f '(x) = 2 - ln(cos x)",
    ]
  },
];