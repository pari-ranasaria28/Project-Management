// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ufrvorsibkvhbnicewtg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmcnZvcnNpYmt2aGJuaWNld3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTgwMjAsImV4cCI6MjA2NTk3NDAyMH0.1PjFtERtXUg51EdQ_MQdkuD6EzdegPtpH9O26GJ5KOE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);