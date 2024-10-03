import React, { useState } from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
  Button
} from '@mui/material';

const VideoExample = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');


  const [showFullText, setShowFullText] = useState(false); 
  
  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };
  const loremText = 
  "Passo 1: Acessar o Sistema do PERDCOMP\n\n" +
  "Entre no sistema oficial da Receita Federal através do portal e-CAC, utilizando seu certificado digital ou código de acesso. Após o login, navegue até a seção 'PerdComp Web' e selecione a opção 'Analisar Pedido'.\n\n" 
  
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { name: 'Você', text: newComment }]);
      setNewComment('');
    }
  };

  const modules = [
    {
      title: 'Conteúdo 1 - Vídeo (30s)',
      progress: 75,
      duration: '30s',
      points: 10,
    },
    {
      title: 'Conteúdo 2 - Vídeo (45s)',
      progress: 0,
      duration: '45s',
      points: 15,
    },
    {
      title: 'Conteúdo 3 - Vídeo (60s)',
      progress: 0,
      duration: '60s',
      points: 20,
    },
  ];

  const totalPoints = modules.reduce((total, module) => total + module.points, 0);

  return (
    <Box display="flex" flexDirection="row" height="100vh" p={4} bgcolor="#f4f7fb">
      <Box flex={3} mr={4}>
        <Box
          sx={{
            height: '450px',
            backgroundColor: '#E0F7FA',
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/PYBYVYINfVk?si=-3iQWQcZeNCAdpPY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>

        <Typography variant="body1">
          {showFullText ? loremText : `${loremText.substring(0, 200)}...`}
        </Typography>

        <Button onClick={handleToggleText} sx={{ mt: 1 }} variant="text">
          {showFullText ? 'Ver menos' : 'Ver mais'}
        </Button>
      </Box>

      <Box flex={1} sx={{ padding: '20px', backgroundColor: '#F0F4F7', borderRadius: '8px' }}>
        <Typography variant="h6" color="#0D47A1">Módulos do Curso</Typography>
        <Divider sx={{ my: 2 }} />

        {modules.map((module, index) => (
          <Card key={index} sx={{ mb: 2, backgroundColor: '#FFFFFF', borderRadius: '8px', cursor: 'pointer' }}>
            <CardContent>
              <Typography variant="body1" fontWeight="bold" color="#0D47A1">
                {module.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Duração: {module.duration}
              </Typography>
              <Typography variant="body2" color="#0D47A1">
                Pontuação: {module.points} pontos
              </Typography>
              <Box mt={1}>
                <LinearProgress variant="determinate" value={module.progress} sx={{ height: '10px', borderRadius: '5px', backgroundColor: '#BBDEFB' }} />
                <Typography variant="body2" color="textSecondary" mt={1}>
                  {module.progress}% Concluído
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default VideoExample;
