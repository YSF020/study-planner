const translations = {
  en: {
    title: "Study Planner",
    subtitle: "Plan your week, keep your focus, and grow step by step.",
    weekOverview: "Week overview",
    weeklyFocus: "Weekly Focus",
    weeklyFocusDescription:
      "These are your main goals for this week. Keep them small and realistic.",
    assistantTitle: "Assistant",
    assistantBody:
      "Use this box as a mental assistant: write down questions for your teacher, mentor or tutor.",
    assistantExample1: "Which exercises are the hardest right now?",
    assistantExample2: "What must be finished before the weekend?",
    assistantExample3: "Where do I need help?",
    tasksLabel: "tasks",
    languageLabel: "Language",
    userLabel: "Student",
  },
  nl: {
    title: "Study Planner",
    subtitle:
      "Plan je week, houd focus en groei stap voor stap.",
    weekOverview: "Weekoverzicht",
    weeklyFocus: "Weekly Focus",
    weeklyFocusDescription:
      "Dit zijn je belangrijkste doelen voor deze week. Hou ze klein en haalbaar.",
    assistantTitle: "Assistant",
    assistantBody:
      "Gebruik deze box als mentale assistant: schrijf hier vragen op voor je docent, mentor of tutor.",
    assistantExample1: "Welke opgaven vind ik nu het lastigst?",
    assistantExample2: "Wat moet echt af zijn vóór het weekend?",
    assistantExample3: "Waar heb ik hulp bij nodig?",
    tasksLabel: "taken",
    languageLabel: "Taal",
    userLabel: "Leerling",
  },
};

export function getTranslations(lang) {
  return translations[lang] || translations.en;
}

export const supportedLanguages = [
  { code: "en", label: "English" },
  { code: "nl", label: "Nederlands" },
];
