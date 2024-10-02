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
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';

const Trilhas = () => {
  const trilhasEmAndamento = [
    {
      title: 'Academia SophiDoor - Do básico ao avançado',
      progress: 7,
    },
    {
      title: 'Produtos SophiaTech',
      progress: 66,
    },
    {
      title: 'Aprenda com quem faz acontecer',
      progress: 43,
    },
  ];

  return (
    <Box p={5}>
      <Box display="flex"  mb={4}>
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

      {/* Trilhas em andamento */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Em andamento
        </Typography>
        <Grid container spacing={3}>
          {trilhasEmAndamento.map((trilha, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: '8px' }}>
                {/* Iframe do vídeo do YouTube */}
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Trilhas;
