"use client";

import { supportedLanguages } from "../lib/i18n";
import users from "../data/users";

export default function Header({ lang, setLang, userId, setUserId, t }) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {t.title}
        </h1>
        <p className="text-slate-700 mt-1 max-w-xl text-sm md:text-base">
          {t.subtitle}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
        <div className="flex flex-col text-sm">
          <label className="text-xs font-medium text-slate-600 mb-1">
            {t.languageLabel}
          </label>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 bg-white text-sm shadow-sm"
          >
            {supportedLanguages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col text-sm">
          <label className="text-xs font-medium text-slate-600 mb-1">
            {t.userLabel}
          </label>
          <select
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 bg-white text-sm shadow-sm min-w-[160px]"
          >
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name} ({u.grade})
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
