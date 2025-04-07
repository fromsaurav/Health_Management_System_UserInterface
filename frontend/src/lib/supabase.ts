import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Supabase Anon Key:', import.meta.env.VITE_SUPABASE_ANON_KEY);


export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const sendOTP = async (email: string) => {
  // In a real application, you would integrate with a service like Twilio or SendGrid
  // For demo purposes, we'll simulate OTP sending
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Store OTP in Supabase with expiration
  const { error } = await supabase
    .from('otps')
    .insert([
      {
        email,
        otp,
        expires_at: new Date(Date.now() + 10 * 60 * 1000).toISOString(), // 10 minutes expiry
      },
    ]);

  return { otp, error };
};