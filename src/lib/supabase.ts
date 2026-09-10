import Constants from 'expo-constants';
import { createClient } from '@supabase/supabase-js';

const extra = Constants.expoConfig?.extra;

const supabaseUrl = extra?.supabaseUrl;
const supabasePublishableKey = extra?.supabasePublishableKey;

if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error('Supabase configuration is missing');
}

export const supabase = createClient(
    supabaseUrl,
    supabasePublishableKey,
);