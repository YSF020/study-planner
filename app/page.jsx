"use client";

import { useMemo, useState } from "react";
import Header from "../components/Header";
import WeeklyFocus from "../components/WeeklyFocus";
import AssistantBox from "../components/AssistantBox";
import DayCard from "../components/DayCard";
import users from "../data/users";
import { getTranslations } from "../lib/i18n";

export default function HomePage() {
  const [userId, setUserId] = useState(users[0]?.id ?? "yusuf");
  const [lang, setLang] = useState(users[0]?.defaultLanguage ?? "nl");

  const t = useMemo(() => getTranslations(lang), [lang]);
  const activeUser = useMemo(
    () => users.find((u) => u.id === userId) ?? users[0],
    [userId]
  );

  return (
    <div className="space-y-6">
      <Header
        lang={lang}
        setLang={setLang}
        userId={userId}
        setUserId={setUserId}
        t={t}
      />

      <WeeklyFocus t={t} focusPoints={activeUser.weeklyFocus} />

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">{t.weekOverview}</h2>
          <p className="text-xs text-slate-500">
            {activeUser.name} – {activeUser.grade}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activeUser.days.map((day) => (
            <DayCard key={day.name} day={day} t={t} />
          ))}
        </div>
      </section>

      <AssistantBox t={t} />
    </div>
  );
}
