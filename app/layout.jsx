import "./globals.css";

export const metadata = {
  title: "Study Planner",
  description: "Multi-user bilingual study planner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 min-h-screen">
        <div className="p-4 md:p-8">
          <main className="max-w-6xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
