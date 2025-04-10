'use client'
import { useState } from 'react';
import { 
  Container, Box, Typography, Button, 
  TextField, Checkbox, FormControlLabel, 
  Divider, Grid 
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box sx={{
        bgcolor: 'background.paper',
        p: { xs: 3, sm: 4 },
        borderRadius: 4,
        boxShadow: 2,
        animation: 'fadeIn 0.5s ease-in',
        '@keyframes fadeIn': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }}>
        {/* Header Section */}
        <Typography variant="h4" sx={{ 
          fontWeight: 700, 
          mb: 2,
          fontSize: { xs: '1.75rem', sm: '2.125rem' }
        }}>
          Welcome back, Olivia
        </Typography>
        
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Continue with Google or enter your details.
        </Typography>

        {/* Google Login Button */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            py: 1.5,
            mb: 3,
            borderColor: '#e0e0e0',
            color: 'text.primary',
            '&:hover': {
              borderColor: '#4285F4',
              backgroundColor: '#f8f9fa'
            }
          }}
        >
          Log in with Google
        </Button>

        {/* Divider */}
        <Divider sx={{ 
          mb: 3, 
          color: 'text.secondary',
          '&::before, &::after': {
            borderColor: 'divider',
          }
        }}>
          or
        </Divider>

        {/* Login Form */}
        <Box component="form" sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ mb: 3 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            sx={{ mb: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Remember Me & Forgot Password */}
          <Grid container alignItems="center" sx={{ mb: 3 }}>
            <Grid item xs>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Remember for 30 days"
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
              />
            </Grid>
            <Grid item>
              <Button 
                variant="text" 
                size="small"
                sx={{ 
                  textTransform: 'none',
                  fontWeight: 500,
                  color: 'primary.main'
                }}
              >
                Forget password
              </Button>
            </Grid>
          </Grid>

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              mb: 2,
              fontWeight: 600,
              borderRadius: 2,
              '&:hover': { transform: 'scale(0.98)' }
            }}
          >
            Log in
          </Button>
        </Box>

        {/* Sign Up Link */}
        <Typography 
          align="center" 
          color="text.secondary"
          sx={{ 
            fontSize: '0.875rem',
            '& a': {
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': { textDecoration: 'underline' }
            }
          }}
        >
          Don't have an account?{' '}
          <a href="#">Sign up for free</a>
        </Typography>
      </Box>
    </Container>
  );
}