import React from 'react';
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  InputAdornment,
  TextField,
  IconButton,
  Select,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Trilhas = () => {
  const trilhasEmAndamento = [
    {
      title: 'Introdução ao PERDCOMP - Como Iniciar',
      progress: 7,
    },
    {
      title: 'Erros Comuns no Preenchimento',
      progress: 66,
    },
    {
      title: 'Dicas Avançadas para Maximizar o Uso',
      progress: 43,
    },
  ];

  return (
    <Box p={5}>
      <Box
        sx={{
          height: '300px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          borderRadius: '8px',
          mb: 4,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          height="300"
          width="100%"
          image="https://i0.wp.com/asisprojetos.com.br/wp-content/uploads/2024/05/ICMS-Descomplicado-BLOG.jpeg?w=1600&ssl=1"
          alt="Imagem ICMS Descomplicado"
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '10px',
            left: '20px',
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6">TRILHA</Typography>
          <Typography variant="h4" fontWeight="bold">
            PERDCOMP - Do básico ao avançado
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#4a90e2', color: '#fff', mt: 2 }}
          >
            Continuar
          </Button>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" mb={4}>
        <Select
          defaultValue=""
          displayEmpty
          sx={{ minWidth: '200px', backgroundColor: '#fff', borderRadius: '4px' }}
        >
          <MenuItem value="">
            <em>Trilhas</em>
          </MenuItem>
          <MenuItem value={10}>Trilha 1</MenuItem>
          <MenuItem value={20}>Trilha 2</MenuItem>
        </Select>
        <IconButton sx={{ backgroundColor: '#fff', borderRadius: '50%' }}>
        </IconButton>
        <TextField
          placeholder="Busque por título ou categoria"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: '300px', backgroundColor: '#fff', borderRadius: '4px' }}
        />
      </Box>

      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Em andamento
        </Typography>
        <Grid container spacing={3}>
          {trilhasEmAndamento.map((trilha, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to="/video" style={{ textDecoration: 'none' }}>
                <Card sx={{ borderRadius: '8px' }}>
                  <CardMedia
                    component="iframe"
                    height="315"
                    src="https://www.youtube.com/embed/g4vzqOHQFFI?si=G5vuXF_SrCnmiJDq"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <CardContent>
                    <Typography variant="h6">{trilha.title}</Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" color="textSecondary">
                        Progresso: {trilha.progress}%
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: '#f0f0f0',
                          borderRadius: '4px',
                          height: '8px',
                          mt: 1,
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: '#4a90e2',
                            height: '100%',
                            width: `${trilha.progress}%`,
                          }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Trilhas;
