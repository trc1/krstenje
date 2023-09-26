import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sqbdiplkaelmrewzicyx.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxYmRpcGxrYWVsbXJld3ppY3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2MzMzMDUsImV4cCI6MjAxMTIwOTMwNX0.YNiFyOY7guuejbI7IkiGWh-1EgHD37qTmKFWGC3zws0"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase