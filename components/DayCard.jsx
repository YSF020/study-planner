export default function DayCard({ day, t }) {
  return (
    <article className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{day.name}</h3>
        <span className="text-xs text-slate-500">
          {day.tasks.length} {t.tasksLabel}
        </span>
      </div>
      <ul className="space-y-2">
        {day.tasks.map((task, index) => (
          <li
            key={index}
            className="text-sm p-2 rounded-lg border border-slate-100 bg-slate-50"
          >
            {task}
          </li>
        ))}
      </ul>
    </article>
  );
}
