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
    {
      title: 'Avaliação do curso - Questionário',
      progress: 0,
      duration: '15min',
      points: 30,
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
            src="https://www.youtube.com/embed/qBkveO-P68g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" mb={2} color="#0D47A1">Comentários</Typography>
          <TextField
            label="Escreva um comentário"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            sx={{ mb: 2, backgroundColor: '#FFFFFF', borderRadius: '4px' }}
          />
          <Button variant="contained" onClick={handleAddComment} sx={{ backgroundColor: '#0288D1', color: '#fff' }}>
            Postar
          </Button>

          <Box mt={4}>
            <Typography variant="h6" color="#0D47A1">Comentários Recentes</Typography>
            <List>
              {comments.map((comment, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={comment.name}
                      secondary={comment.text}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Box>
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
