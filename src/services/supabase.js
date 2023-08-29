
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rpcwlablczbxqxwzzjav.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwY3dsYWJsY3pieHF4d3p6amF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4NDUyOTUsImV4cCI6MjAwODQyMTI5NX0.qYnVyWP978UgXs1HRt8QwGeiK1DViQB1bkkEginwbls"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase
