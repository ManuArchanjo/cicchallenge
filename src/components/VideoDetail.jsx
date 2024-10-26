import React, { useState } from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  Card,
  CardContent,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const VideoExample = () => {
  const [comments, setComments] = useState([
    { name: 'Ana', text: 'Alguém sabe qual o prazo para fazer o pedido no sistema da receita?' },
    { name: 'Carlos', text: 'Esse conteúdo está ótimo! A plataforma realmente facilita as coisas.' },
  ]);
  const [newComment, setNewComment] = useState('');
  const [showFullText, setShowFullText] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const loremText =
    "Passo 1: Acessar o Sistema do PERDCOMP\n\n" +
    "Entre no sistema oficial da Receita Federal através do portal e-CAC, utilizando seu certificado digital ou código de acesso. Após o login, navegue até a seção 'PerdComp Web' e selecione a opção 'Analisar Pedido'.\n\n";

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { name: 'Você', text: newComment }]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const modules = [
    { title: 'Conteúdo 1 - Vídeo (30s)', progress: 75, duration: '30s', points: 10 },
    { title: 'Conteúdo 2 - Vídeo (45s)', progress: 0, duration: '45s', points: 15 },
    { title: 'Conteúdo 3 - Vídeo (60s)', progress: 0, duration: '60s', points: 20 },
  ];

  const quizQuestions = [
    {
      question: "O que é necessário para acessar o sistema PERDCOMP?",
      options: ["Certificado digital ou código de acesso", "Senha padrão", "Somente o CPF"],
      correctAnswer: "Certificado digital ou código de acesso",
    },
    {
      question: "Onde selecionar a opção 'Analisar Pedido'?",
      options: ["Seção 'PerdComp Web'", "Página inicial", "Seção 'Documentos'"],
      correctAnswer: "Seção 'PerdComp Web'",
    },
    {
      question: "Qual é o primeiro passo ao acessar o portal e-CAC?",
      options: ["Entrar com o certificado digital", "Cadastrar nova senha", "Confirmar o endereço de e-mail"],
      correctAnswer: "Entrar com o certificado digital",
    },
  ];

  const handleOpenQuiz = () => setOpenQuiz(true);
  const handleCloseQuiz = () => {
    setOpenQuiz(false);
    setScore(null);
    setAnswers({});
  };

  const handleAnswerChange = (index, answer) => {
    setAnswers({ ...answers, [index]: answer });
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    quizQuestions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctCount += 1;
      }
    });
    setScore(correctCount);
  };

  return (
    <Box display="flex" flexDirection="row" height="100vh" p={4} bgcolor="#fcfcfc">
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

        <Box mt={4}>
          <Typography variant="h6" color="#0D47A1" sx={{ mb: 1 }}>Comentários sobre Notas Fiscais</Typography>
          <Divider sx={{ mb: 2 }} />

          <List>
            {comments.map((comment, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemText
                  primary={comment.name}
                  secondary={comment.text}
                />
                {comment.name === 'Você' && (
                  <IconButton onClick={() => handleDeleteComment(index)} edge="end" aria-label="delete">
                    <DeleteIcon color="#0D47A1" />
                  </IconButton>
                )}
              </ListItem>
            ))}
          </List>

          <TextField
            label="Adicionar um comentário"
            variant="outlined"
            fullWidth
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button onClick={handleAddComment} variant="contained" color="primary" sx={{ mt: 1 }}>
            Comentar
          </Button>
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

        <Card sx={{ mt: 3, backgroundColor: '#ffffff', borderRadius: '8px', cursor: 'pointer' }} onClick={handleOpenQuiz}>
          <CardContent>
            <Typography variant="body1" fontWeight="bold" color="#0D47A1">
              Quiz de Validação: Notas Fiscais
            </Typography>
            <Typography variant="body2" color="#030b16">
              Clique para validar o conteúdo do vídeo.
            </Typography>
          </CardContent>
        </Card>

        <Dialog open={openQuiz} onClose={handleCloseQuiz} maxWidth="sm" fullWidth>
          <DialogTitle>Quiz: Validação do Conteúdo</DialogTitle>
          <DialogContent>
            {quizQuestions.map((question, index) => (
              <Box key={index} my={2}>
                <Typography variant="body1" fontWeight="bold">
                  {question.question}
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    value={answers[index] || ""}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                  >
                    {question.options.map((option, optIndex) => (
                      <FormControlLabel
                        key={optIndex}
                        value={option}
                        control={<Radio />}
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseQuiz} color="primary">
              Fechar
            </Button>
            <Button onClick={handleSubmitQuiz} color="primary" variant="contained">
              Enviar Respostas
            </Button>
          </DialogActions>
          {score !== null && (
            <DialogContent>
              <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                Você acertou {score} de {quizQuestions.length} perguntas!
              </Typography>
            </DialogContent>
          )}
        </Dialog>
      </Box>
    </Box>
  );
};

export default VideoExample;
