import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  IconButton,
  Pagination,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const oportunidades = [
  {
    cargo: 'Analista de Monitoramento Tributário',
    local: 'Remota',
    tipo: 'Plataforma',
    data: '1 semana atrás',
    descricao: 'Monitora eventos de divergência e alerta para ações corretivas.',
    requisitos: ['Experiência em análise de dados fiscais', 'Conhecimento no sistema PERDCOMP'],
  },
  {
    cargo: 'Especialista em Controles Automatizados',
    local: 'Híbrida - São Paulo/SP',
    tipo: 'Plataforma',
    data: '2 semanas atrás',
    descricao: 'Desenvolve controles para automatização tributária.',
    requisitos: ['Experiência em automação de processos fiscais', 'Conhecimento em integrações de sistemas'],
  },
  {
    cargo: 'Engenheiro de Dados Tributários',
    local: 'Remota',
    tipo: 'Plataforma',
    data: '1 mês atrás',
    descricao: 'Consolida dados para insights financeiros.',
    requisitos: ['Experiência em engenharia de dados', 'Conhecimento em tributação federal'],
  },
  {
    cargo: 'Gerente de Conformidade Fiscal',
    local: 'Presencial - Brasília/DF',
    tipo: 'Plataforma',
    data: '3 dias atrás',
    descricao: 'Lidera políticas de conformidade tributária.',
    requisitos: ['Experiência em gestão de conformidade', 'Conhecimento de legislação tributária'],
  },
  {
    cargo: 'Gerente de Conformidade Fiscal',
    local: 'Presencial - Brasília/DF',
    tipo: 'Plataforma',
    data: '3 dias atrás',
    descricao: 'Lidera políticas de conformidade tributária.',
    requisitos: ['Experiência em gestão de conformidade', 'Conhecimento de legislação tributária'],
  },
  {
    cargo: 'Especialista em Controles Automatizados',
    local: 'Híbrida - São Paulo/SP',
    tipo: 'Plataforma',
    data: '2 semanas atrás',
    descricao: 'Desenvolve controles para automatização tributária.',
    requisitos: ['Experiência em automação de processos fiscais', 'Conhecimento em integrações de sistemas'],
  },
  {
    cargo: 'Engenheiro de Dados Tributários',
    local: 'Remota',
    tipo: 'Plataforma',
    data: '1 mês atrás',
    descricao: 'Consolida dados para insights financeiros.',
    requisitos: ['Experiência em engenharia de dados', 'Conhecimento em tributação federal'],
  },
  {
    cargo: 'Analista de Monitoramento Tributário',
    local: 'Remota',
    tipo: 'Plataforma',
    data: '1 semana atrás',
    descricao: 'Monitora eventos de divergência e alerta para ações corretivas.',
    requisitos: ['Experiência em análise de dados fiscais', 'Conhecimento no sistema PERDCOMP'],
  },
];

const OportunidadesInternas = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" color="#3a3a3a" mb={1}>
        Recomendações para você
      </Typography>
      <Typography variant="body2" color="gray" mb={2}>
        Baseado no seu perfil e histórico de pesquisas
      </Typography>

      <Box display="flex" gap={1} mb={3}>
        <Button variant="contained" sx={{ backgroundColor: '#2763f7', color: '#fff', borderRadius: '20px' }}>
          Todos
        </Button>
        <Button variant="outlined" sx={{ borderColor: '#2763f7', color: '#2763f7', borderRadius: '20px' }}>
          Plataforma
        </Button>
        <Button variant="outlined" sx={{ borderColor: '#2763f7', color: '#2763f7', borderRadius: '20px' }}>
          Gestão
        </Button>
      </Box>

      <Grid container spacing={2}>
        {oportunidades.map((vaga, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: '8px',
                boxShadow: 'none',
                width: '100%',
                height: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Box>
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                    <Chip
                      label={vaga.tipo}
                      color="secondary"
                      size="small"
                      sx={{ backgroundColor: '#2763f7', color: '#fff', fontSize: '0.8rem' }}
                      icon={<InfoOutlinedIcon fontSize="small" />}
                    />
                    <IconButton size="small">
                      <BookmarkBorderIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="h6" fontWeight="bold" fontSize="0.9rem" mb={0.5}>
                    {vaga.cargo}
                  </Typography>
                  <Typography variant="body2" color="gray" fontSize="0.8rem" mb={0.5}>
                    {vaga.local}
                  </Typography>
                  <Typography variant="body2" color="gray" fontSize="0.8rem" mb={1}>
                    {vaga.descricao}
                  </Typography>
                </Box>

                <Box mt="auto">
                  <Typography variant="subtitle2" color="#2762f7af" fontWeight="bold">
                    Requisitos:
                  </Typography>
                  <List dense>
                    {vaga.requisitos.map((req, idx) => (
                      <ListItem key={idx} sx={{ p: 0 }}>
                        <ListItemText primary={req} primaryTypographyProps={{ variant: 'body2', fontSize: '0.8rem' }} />
                      </ListItem>
                    ))}
                  </List>
                  <Typography variant="caption" color="gray" mt={1} display="block">
                    {vaga.data}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Paginação */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination count={3} shape="rounded" />
      </Box>
    </Box>
  );
};

export default OportunidadesInternas;
