// IMPORTED FROM SUPABASE DB

// doesn't work - manually updated weight type and commented out import
// import { Database } from "./supabase.db"

// export type Weight = Database["public"]["Tables"]["weight"]["Row"]

export type Weight = {
    id: string;
    created_at: string | null;
    description: string | null;
    weight: number | null;
    weight_url: string | null;
    user_id: string;
    date: string; // Add this line
  }
  
