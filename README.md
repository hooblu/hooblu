# Hooblu Studios - Anime Streaming Platform

A Crunchyroll-like streaming platform for Hooblu Studios anime series.

## Tech Stack

- **Frontend**: Next.js 15 (React, TypeScript)
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Clerk
- **Video Hosting**: Mux
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

3. Install dependencies

```bash
npm install
```

4. Set up the database schema in Supabase:
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Copy and run the `database.sql` file

5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Database Schema

- **users**: User profiles (linked to Clerk)
- **series**: Anime series information
- **episodes**: Individual episodes
- **watch_history**: User's watch progress
- **bookmarks**: User's favorite series
- **subscriptions**: User subscription plans

## Phase 1 Deliverables

- ✅ Database schema
- ✅ Authentication setup (Clerk)
- ✅ Core UI components
- ✅ Landing page
- ✅ API routes for series and episodes

## Next Steps (Phase 2)

- [ ] Video player integration (Mux)
- [ ] Series detail page
- [ ] Watch history tracking
- [ ] Bookmarks management
- [ ] Search and filtering
