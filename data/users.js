const users = [
  {
    id: "yusuf",
    name: "Yusuf",
    grade: "havo/vwo brugklas",
    defaultLanguage: "nl",
    weeklyFocus: [
      "Deze twee weken: goed voorbereiden op toetsen en opdrachten.",
      "Bijhouden van Nederlands (werkwoordspelling) en wiskunde (H5 + 5.1).",
      "Voor GO de toetsstof (powerpoints + aantekeningen) op tijd doornemen."
    ],
    days: [
      {
        name: "Woensdag 10 december",
        tasks: [
          "08:30–09:15 Rekenen (rp_rek, lokaal a12).",
          "08:30–09:30 Frans bijles (A04).",
          "09:15–10:00 LO (laft, B9).",
          "10:20–11:05 LO (laft, B9).",
          "11:05–11:50 BIV (B9, A06) – Quiz 4.1–4.2, daarna 4.3 (boek meenemen).",
          "12:20–13:05 BV (B9, C03).",
          "13:05–13:50 GO (B9, A22) – werken aan levensvisieboek."
        ]
      },
      {
        name: "Donderdag 11 december",
        tasks: [
          "09:30–10:30 Engels (B9, C16) – Present simple vs present continuous p.128; adverbs of time & frequency p.128; words & expressions p.31 + excel document.",
          "10:55–11:55 Aardrijkskunde (B9, A28) – leren: 2.1 + 2.2.",
          "11:55–12:55 Frans (B9, C14).",
          "13:25–14:25 HNE (B9, A18).",
          "14:25–15:25 Geschiedenis (B9, B26)."
        ]
      },
      {
        name: "Vrijdag 12 december",
        tasks: [
          "08:30–09:30 Nederlands (B9, A04) – maak opdr. 1 t/m 3, blz. 256–257.",
          "09:30–10:30 Frans (B9, C15).",
          "10:55–11:55 ICT (B9, B11).",
          "11:55–12:55 Wiskunde (B9, A11) – refresh H5 + paragraaf 5.1.",
          "13:25–14:25 Engels (B9, C18) – neem student book, workbook en 'See you in the cosmos' mee."
        ]
      },
      {
        name: "Maandag 15 december",
        tasks: [
          "09:30–10:30 Nederlands (B9, A07).",
          "10:55–11:55 Aardrijkskunde (B9, A28).",
          "11:55–12:55 BV (B9, C03).",
          "13:25–14:25 HNE (B9, A21).",
          "14:25–15:25 Wiskunde (B9, A11)."
        ]
      },
      {
        name: "Dinsdag 16 december",
        tasks: [
          "08:30–09:15 Techniek (B21) – br_hvt.tech1.",
          "09:15–10:00 Techniek (B21) – br_hvt.tech1.",
          "10:20–11:05 ML (B9, B11).",
          "11:05–11:50 Wiskunde (B9, B26).",
          "12:20–13:05 BIV (B9, A15) – lees 4.3 en maak vragen 18–23 en 25–27; quiz bespreken.",
          "13:05–13:50 Nederlands (B9, A04) – werkwoordspelling paragraaf 7 t/m 10."
        ]
      },
      {
        name: "Woensdag 17 december",
        tasks: [
          "08:30–09:30 Rekenen (rp_rek, A12).",
          "08:30–09:30 Frans bijles (A04).",
          "09:30–10:30 LO (laft, B9).",
          "10:55–11:55 LO (laft, B9).",
          "11:55–12:55 BIV (B9, A06) – geen les.",
          "13:25–14:25 BV (B9, C03).",
          "14:25–15:25 GO (B9, A22) – stof voor toets: powerpoints + aantekeningen, zie studiewijzer.",
          "15:25–16:25 Techniek (B21) – br_hvt.tech1."
        ]
      },
      {
        name: "Donderdag 18 december",
        tasks: [
          "09:30–10:30 Engels (B9, C16).",
          "10:55–11:55 Aardrijkskunde (B9, A28).",
          "11:55–12:55 Frans (B9, C14).",
          "13:25–14:25 HNE (B9, A18).",
          "14:25–15:25 Geschiedenis (B9, B26)."
        ]
      },
      {
        name: "Vrijdag 19 december",
        tasks: [
          "08:30–09:30 Nederlands (B9, A04).",
          "09:30–10:30 Frans (B9, C15).",
          "10:55–11:55 ICT (B9, B11).",
          "11:55–12:55 Wiskunde (B9, A11).",
          "13:25–14:25 Engels (B9, C18)."
        ]
      }
    ]
  },
  {
    id: "emma",
    name: "Emma",
    grade: "vwo 3",
    defaultLanguage: "en",
    weeklyFocus: [
      "Finish biology summary before Wednesday.",
      "Practice French listening 3 times this week.",
      "Prepare math test with at least 2 practice exams."
    ],
    days: [
      {
        name: "Example – Monday",
        tasks: [
          "Math: practice exam 1.",
          "French: 10 min listening."
        ]
      },
      {
        name: "Example – Tuesday",
        tasks: [
          "Biology: finish summary.",
          "History: read textbook pages 40–45."
        ]
      }
    ]
  }
];

export default users;
