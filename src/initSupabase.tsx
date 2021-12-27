import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_SUPABASE_URL || "https://ofzjnizebxpvqonsnvwk.supabase.co",
  process.env.NEXT_SUPABASE_PUBLIC_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTk3ODg2MywiZXhwIjoxOTU1NTU0ODYzfQ.vsqLgss7ekjrWuVApzHL-u1cXPZuAyNYakhbSnL4uqM",
  {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  }
);

export default supabase;
