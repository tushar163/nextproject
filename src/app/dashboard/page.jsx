'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { TextField, Button, Container, Box, Typography, Grid, Divider } from '@mui/material';
import { signIn, signOut } from 'next-auth/react';
import GoogleIcon from '@mui/icons-material/Google';
export default function DashboardPage() {
  const { data: session, status } = useSession();
  function handleLogout() {
      signOut({
        callbackUrl: '/',});
    }

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") redirect("/");

  return (
    <div>
      <h1>Welcome, {session?.user?.name}</h1>
      <p>Email: {session?.user?.email}</p>
      <Divider sx={{ marginBottom: 2 }}>or</Divider>
          <Button
              variant="outlined"
              fullWidth
              onClick={handleLogout}
              startIcon={<GoogleIcon />}
              sx={{
                borderColor: '#4285F4',
                color: '#4285F4',
                '&:hover': {
                  borderColor: '#4285F4',
                  backgroundColor: '#f1f3f4',
                },
              }}
            >
              Sign out
            </Button>
    </div>
  );
}
