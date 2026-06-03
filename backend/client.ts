import { createClient } from '@supabase/supabase-js';

export function createSupabaseClient() {
  return createClient(
    "https://ivfkrtdqzqnmlxdhzuec.supabase.co",
    "sb_secret_7obH0-FIzwsNAE3mLDyStg_3QExNkCN"
  )
}
