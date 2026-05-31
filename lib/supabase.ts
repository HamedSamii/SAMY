import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const canInitClient =
  !!supabaseUrl &&
  !!supabaseAnonKey &&
  (supabaseUrl.startsWith("http://") || supabaseUrl.startsWith("https://"));
const canInitAdmin = canInitClient && !!supabaseServiceRoleKey;

export const supabase = canInitClient
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Server-only usage in admin pages/actions.
export const supabaseAdmin = canInitAdmin
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null;
