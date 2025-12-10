# Study Planner – Optie C (Advanced, Multi-user, EN/NL)

This is an extended version of the Study Planner:

- 🇬🇧 / 🇳🇱 Bilingual (English + Nederlands)
- Multiple users (mentee / student profiles)
- Future-proof and easy to extend (e.g. real database, auth, more pages)

## Quick start

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Deploy to Vercel

1. Push this folder as a GitHub repository.
2. Import the repo in Vercel.
3. Use the default Next.js settings.
4. Deploy. Done 🚀

## Structure (short)

- `app/layout.jsx` – global layout + styling
- `app/page.jsx` – main dashboard (multi-user, multi-language)
- `components/Header.jsx` – title, language switcher, user switcher
- `components/DayCard.jsx` – per-day study blocks
- `components/WeeklyFocus.jsx` – weekly focus area per user
- `components/AssistantBox.jsx` – assistant / notes area
- `data/users.js` – example users with EN/NL mix
- `lib/i18n.js` – tiny translation helper
- `app/globals.css` – Tailwind + base styling

## Next steps / future-proof ideas

- Connect `data/users.js` to a real database (Supabase, Firebase, Prisma + Postgres).
- Add authentication so each student sees only their own planner.
- Create a `/mentor` page where you can see all students at a glance.
- Add editable tasks (with a small API route or localStorage).
