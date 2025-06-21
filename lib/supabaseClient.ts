import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

const {
  EXPO_PUBLIC_SUPABASE_URL,
  EXPO_PUBLIC_SUPABASE_ANON_KEY,
} = Constants.expoConfig?.extra || {};

if (!EXPO_PUBLIC_SUPABASE_URL || !EXPO_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error(
    'Supabase URL or anon key missing. ‘expo.extra’ in app.json must define EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY'
  );
}

export const supabase = createClient(
  EXPO_PUBLIC_SUPABASE_URL as string,
  EXPO_PUBLIC_SUPABASE_ANON_KEY as string
);
