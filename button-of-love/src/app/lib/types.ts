/**
 * TypeScript interfaces for API responses
 * 
 * This file defines the shape of data returned from API endpoints,
 * ensuring type safety throughout the application.
 */

// Base user interface
export interface User {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  birthdate: string; // ISO date string
  password: string;
}

// User without sensitive data (for API responses)
export interface PublicUser {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  birthdate: string;
}

// Relation member interface
export interface RelationMember {
  relation_id: string;
  user_id: string;
  user?: PublicUser; // Optional populated user data
}

// Love counter interface
export interface LoveCounter {
  relation_id: string;
  from_user_id: string;
  count: number;
  last_loveu_sent: string; // ISO date string
  user?: PublicUser; // Optional populated user data
}

// Relation invitation interface
export interface RelationInvitation {
  id: string;
  inviter_id: string;
  invited_user_id: string;
  status: string; // 'pending' | 'accepted' | 'declined'
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  inviter?: PublicUser; // Optional populated inviter data
  invited_user?: PublicUser; // Optional populated invited user data
}

// Full relation interface with all related data
export interface Relation {
  id: string;
  created_at: string; // ISO date string
  relation_invitation_id: string | null;
  members: RelationMember[];
  love_counters: LoveCounter[];
  relation_invitation?: RelationInvitation | null;
}

// Error response interface
export interface ApiError {
  error: string;
  status?: number;
}

// Session interface
export interface Session {
  userId: string;
  // Add other session properties as needed
}

export type SessionPayload = {
    userId: string;
    expiresAt: Date;
}
