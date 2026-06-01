import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    "https://ivfkrtdqzqnmlxdhzuec.supabase.co",
    "sb_publishable_EWyJKfIU3-SVbkejsCWSBg_ZPlVbHCu"
  )
}
