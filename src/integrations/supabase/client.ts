// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tltvtmsomgcudgzfogzg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsdHZ0bXNvbWdjdWRnemZvZ3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MDcyMjYsImV4cCI6MjA1OTI4MzIyNn0.VR0JRx11ezxIU1yOb2jRao7XjIzuHubmW7wqqiCRqvA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);