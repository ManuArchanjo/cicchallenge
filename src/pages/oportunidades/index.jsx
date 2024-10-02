import React from 'react';
import {
  Box, Card, CardContent, Typography, Grid, Select, MenuItem, LinearProgress, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import { WorkOutline, LocationOn, SchoolOutlined, CheckCircleOutline, ErrorOutline } from '@mui/icons-material';

const OportunidadesInternas = () => {
  const oportunidades = [
    {
      cargo: 'Gerente de Projetos',
      setor: 'Gestão de Projetos',
      local: 'Presencial - São Paulo',
      progresso: 4,
      totalEtapas: 7,
      modulosNecessarios: ['Introdução à Gestão de Projetos', 'Metodologias Ágeis', 'Gestão de Riscos'],
      status: 'Em andamento',
    },
  ];

  return (
    <Box p={5}>
      <Typography variant="h4" mb={8} fontWeight="bold" color="#003366">
        Oportunidades Internas - Gestão
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box p={3} sx={{ backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <Typography variant="h6" fontWeight="bold" color="#003366" mb={2}>Filtrar oportunidades</Typography>

            <Typography variant="subtitle2" color="gray" mb={1}>Cargo</Typography>
            <Select defaultValue="" displayEmpty fullWidth sx={{ mb: 3, backgroundColor: '#fff', borderRadius: '4px' }}>
              <MenuItem value="">
                <em>Todos os cargos</em>
              </MenuItem>
              <MenuItem value={1}>Gerente de Projetos</MenuItem>
              <MenuItem value={2}>Coordenador de Operações</MenuItem>
              <MenuItem value={3}>Analista de Processos</MenuItem>
            </Select>

            <Typography variant="subtitle2" color="gray" mb={1}>Local</Typography>
            <Select defaultValue="" displayEmpty fullWidth sx={{ mb: 3, backgroundColor: '#fff', borderRadius: '4px' }}>
              <MenuItem value="">
                <em>Todos os locais</em>
              </MenuItem>
              <MenuItem value={1}>Presencial - São Paulo</MenuItem>
              <MenuItem value={2}>Híbrido - São Paulo</MenuItem>
              <MenuItem value={3}>Remoto</MenuItem>
            </Select>

            <Typography variant="subtitle2" color="gray" mb={1}>Status</Typography>
            <Select defaultValue="" displayEmpty fullWidth sx={{ mb: 3, backgroundColor: '#fff', borderRadius: '4px' }}>
              <MenuItem value="">
                <em>Todos os status</em>
              </MenuItem>
              <MenuItem value={1}>Em andamento</MenuItem>
              <MenuItem value={2}>Inscrição Pendente</MenuItem>
              <MenuItem value={3}>Concluído</MenuItem>
            </Select>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {oportunidades.map((op, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}>
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Box>
                        <Typography variant="h6" fontWeight="bold" color="#003366">{op.cargo}</Typography>
                        <Typography><WorkOutline sx={{ color: '#0066cc', mr: 1 }} />{op.setor}</Typography>
                        <Typography><LocationOn sx={{ color: '#0066cc', mr: 1 }} />{op.local}</Typography>
                        <Typography variant="body2" color="gray" mt={1}>
                          Progresso: {op.progresso}/{op.totalEtapas} etapas concluídas
                        </Typography>
                        <LinearProgress variant="determinate" value={(op.progresso / op.totalEtapas) * 100} sx={{ mt: 1, height: '8px', borderRadius: '4px' }} />
                      </Box>
                      <Box>
                        {op.status === 'Concluído' && <CheckCircleOutline sx={{ color: 'green', fontSize: 30 }} />}
                        {op.status === 'Inscrição Pendente' && <ErrorOutline sx={{ color: 'orange', fontSize: 30 }} />}
                        {op.status === 'Em andamento' && <ErrorOutline sx={{ color: 'blue', fontSize: 30 }} />}
                      </Box>
                    </Box>

                    <Typography variant="subtitle1" mt={2} mb={1} color="#003366">
                      Cursos Necessários:
                    </Typography>
                    <List>
                      {op.modulosNecessarios.map((modulo, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemIcon>
                            <SchoolOutlined sx={{ color: '#0066cc' }} />
                          </ListItemIcon>
                          <ListItemText primary={modulo} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OportunidadesInternas;
