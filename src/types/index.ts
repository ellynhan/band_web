export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  social?: {
    instagram?: string;
    youtube?: string;
  };
  order: number;
}

export interface Album {
  id: string;
  title: string;
  releaseDate: string;
  coverUrl: string;
  trackCount: number;
  description: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  order: number;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  date: string;
  location?: string;
  description?: string;
  ticketUrl?: string;
  type: 'concert' | 'festival' | 'broadcast' | 'other';
}

export interface BoardConfig {
  type: string;
  label: string;
  description: string;
  requireAuth: boolean;
  allowAnonymous: boolean;
  order: number;
}

export interface Post {
  id: string;
  boardType: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  isPinned: boolean;
  isNotice: boolean;
  tags?: string[];
}

export interface CreatePostInput {
  boardType: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  isPinned?: boolean;
  isNotice?: boolean;
  tags?: string[];
}

export interface BandInfo {
  name: string;
  tagline: string;
  description: string;
  logoUrl: string;
  heroImageUrl: string;
  instagram: string;
  youtube: string;
  founded: string;
}
