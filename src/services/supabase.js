import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://znqzufdfjonqvgsgqndh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpucXp1ZmRmam9ucXZnc2dxbmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzMzU4MDgsImV4cCI6MjAyNDkxMTgwOH0.H0rKg9WLxO8GA4iI5bV9PWw3_x6klwVw6Re_gHoiPBo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
