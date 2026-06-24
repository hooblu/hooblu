// User & Auth
export interface HoobluUser {
  id: string;
  clerk_id: string;
  email: string;
  username?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

// Series
export interface Series {
  id: string;
  title: string;
  slug: string;
  description: string;
  poster_url: string;
  banner_url?: string;
  rating: number; // 1-5
  genres: string[];
  status: 'ongoing' | 'completed';
  episode_count: number;
  created_at: string;
  updated_at: string;
}

// Episodes
export interface Episode {
  id: string;
  series_id: string;
  episode_number: number;
  season_number: number;
  title: string;
  description: string;
  thumbnail_url?: string;
  mux_asset_id: string;
  duration_seconds: number;
  published_at: string;
  created_at: string;
  updated_at: string;
}

// Watch History
export interface WatchHistory {
  id: string;
  user_id: string;
  episode_id: string;
  watched_at: string;
  watched_seconds: number;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

// Bookmarks/Watchlist
export interface Bookmark {
  id: string;
  user_id: string;
  series_id: string;
  bookmarked_at: string;
}

// Subscriptions
export interface Subscription {
  id: string;
  user_id: string;
  plan: 'free' | 'premium';
  status: 'active' | 'cancelled' | 'expired';
  started_at: string;
  expires_at?: string;
}
