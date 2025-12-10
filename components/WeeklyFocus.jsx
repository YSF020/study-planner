import { Target } from "lucide-react";

export default function WeeklyFocus({ t, focusPoints }) {
  return (
    <section className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex gap-3 items-start">
      <div className="mt-1">
        <Target className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{t.weeklyFocus}</h2>
        <p className="text-slate-700 text-sm mt-1">
          {t.weeklyFocusDescription}
        </p>
        <ul className="mt-3 space-y-1 text-sm list-disc list-inside text-slate-800">
          {focusPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
