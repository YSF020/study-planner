import { MessageSquare } from "lucide-react";

export default function AssistantBox({ t }) {
  return (
    <section className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex gap-3 items-start mt-4">
      <div className="mt-1">
        <MessageSquare className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{t.assistantTitle}</h2>
        <p className="text-slate-700 text-sm mt-1">
          {t.assistantBody}
        </p>
        <ul className="mt-3 text-sm text-slate-800 list-disc list-inside space-y-1">
          <li>{t.assistantExample1}</li>
          <li>{t.assistantExample2}</li>
          <li>{t.assistantExample3}</li>
        </ul>
      </div>
    </section>
  );
}
