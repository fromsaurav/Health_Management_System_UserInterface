/*
  # Authentication and Authorization Schema

  1. New Tables
    - users_roles (junction table for user roles)
    - otps (for OTP verification)
    - notifications (for user notifications)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated access
*/

-- Users roles junction table
CREATE TABLE IF NOT EXISTS users_roles (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'doctor', 'nurse', 'patient')),
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (user_id, role)
);

-- OTP verification table
CREATE TABLE IF NOT EXISTS otps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  otp TEXT NOT NULL,
  verified BOOLEAN DEFAULT false,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type VARCHAR(50) NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE users_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE otps ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can read their own roles"
  ON users_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read their own notifications"
  ON notifications
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can verify their own OTP"
  ON otps
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');