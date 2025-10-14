import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.React_app_supabase_url
const supabaseKey = process.env.app_anon_key
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase