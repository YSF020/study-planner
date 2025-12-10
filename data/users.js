const users = [
  {
    id: "yusuf",
    name: "Yusuf",
    grade: "havo/vwo brugklas",
    defaultLanguage: "nl",
    weeklyFocus: [
      "Afronden hoofdstuk 3 wiskunde voor donderdag",
      "Elke dag 20–25 minuten Engels lezen",
      "Vrijdag: alles kort herhalen voor toetsen",
    ],
    days: [
      {
        name: "Maandag / Monday",
        tasks: [
          "Wiskunde: paragraaf 3.1–3.2 (25 min)",
          "Engels: woordjes herhalen (15 min)",
        ],
      },
      {
        name: "Dinsdag / Tuesday",
        tasks: [
          "Natuurkunde: samenvatting H2 maken",
          "Aardrijkskunde: topografie oefenen",
        ],
      },
      {
        name: "Woensdag / Wednesday",
        tasks: [
          "Biologie: begrippen leren",
          "Engels: korte tekst lezen (15–20 min)",
        ],
      },
      {
        name: "Donderdag / Thursday",
        tasks: [
          "Wiskunde: moeilijke opgaven uit hoofdstuk 3",
          "Frans: luisteroefening",
        ],
      },
      {
        name: "Vrijdag / Friday",
        tasks: [
          "Herhaling van alle vakken met toets",
          "Korte reflectie: wat ging goed / lastig?",
        ],
      },
      {
        name: "Zaterdag / Saturday",
        tasks: [
          "Max 1 uur herhalen, focus op struikelblokken",
          "Daarna vrije tijd (belangrijk!)",
        ],
      },
      {
        name: "Zondag / Sunday",
        tasks: [
          "Planning maken voor volgende week",
          "Schooltas & spullen klaarmaken",
        ],
      },
    ],
  },
  {
    id: "emma",
    name: "Emma",
    grade: "vwo 3",
    defaultLanguage: "en",
    weeklyFocus: [
      "Finish biology summary before Wednesday",
      "Practice French listening 3 times this week",
      "Prepare math test with at least 2 practice exams",
    ],
    days: [
      {
        name: "Monday / Maandag",
        tasks: [
          "Math: practice exam 1",
          "French: 10 min listening",
        ],
      },
      {
        name: "Tuesday / Dinsdag",
        tasks: [
          "Biology: finish summary",
          "History: read textbook pages 40–45",
        ],
      },
      {
        name: "Wednesday / Woensdag",
        tasks: [
          "Math: check mistakes from exam 1",
          "English: read 20 pages of book",
        ],
      },
      {
        name: "Thursday / Donderdag",
        tasks: [
          "French: vocab revision",
          "Physics: exercises 5–10",
        ],
      },
      {
        name: "Friday / Vrijdag",
        tasks: [
          "Math: practice exam 2",
          "Short weekly reflection in notebook",
        ],
      },
      {
        name: "Saturday / Zaterdag",
        tasks: [
          "Light review of all subjects with tests soon",
          "30–45 minutes max, then rest",
        ],
      },
      {
        name: "Sunday / Zondag",
        tasks: [
          "Prepare backpack and schedule",
          "Set 1–2 concrete goals for next week",
        ],
      },
    ],
  },
];

export default users;
