import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nrehzwclzknsdwmgsjzb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yZWh6d2Nsemtuc2R3bWdzanpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MzY5NDksImV4cCI6MjAxMjAxMjk0OX0.VxQ5CzBwThI687YdCStwFR67IAfrPkqGhU4TUscErG0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
