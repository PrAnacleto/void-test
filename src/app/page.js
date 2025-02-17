"use client"

import { useRouter } from 'next/navigation';

import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Grid,
} from '@mui/material';
import axios from 'axios';

const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  // Função para lidar com a mudança nos campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Função para enviar os dados para a API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://sonil-dev.void.co.mz/api/v4/users/login', credentials);
      if (response.data.statusCode === 200) {
        router.push("/dashboard");
        
      } else {
        setError('Credenciais inválidas.');
      }
    } catch (err) {
      console.error(err);
      setError('Ocorreu um erro ao tentar fazer login.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Campo de Usuário */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Campo de Senha */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Senha"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Botão de Envio */}
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Entrar
              </Button>
            </Grid>

            {/* Mensagem de Erro */}
            {error && (
              <Grid item xs={12}>
                <Box sx={{ color: 'error.main' }}>{error}</Box>
              </Grid>
            )}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;