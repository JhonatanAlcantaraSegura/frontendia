"use client";

import { Box, Container, Typography, Button, Paper, Grid } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Grid container spacing={4} direction="column" alignItems="center" justifyContent="center">
          <Grid item>
            <Typography variant="h2" component="h1" align="center" gutterBottom>
              ¡Hola Mundo desde Frontendia!
            </Typography>
            <Typography variant="h5" component="h2" align="center" color="text.secondary" gutterBottom>
              Frontend construido con Next.js 13, React 18, Material UI y TypeScript
            </Typography>
          </Grid>
          
          <Grid item>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Typography variant="h4">{count}</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
                  Incrementar
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => setCount(0)}>
                  Resetear
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item sx={{ mt: 4 }}>
            <Typography variant="body1" align="center">
              Esta es una aplicación de ejemplo que integra las tecnologías especificadas.
              <br />
              Conecta con el backend en <code>backendia</code> para obtener datos reales.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
