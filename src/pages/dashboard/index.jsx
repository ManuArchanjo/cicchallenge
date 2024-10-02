import { Box, IconButton, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import React, { useState } from "react";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const mockForumTopics = [
    {
      id: "1",
      title: "Como utilizar a plataforma CIC para gerenciar documentos?",
      author: "João Silva",
    },
    {
      id: "2",
      title: "Dúvidas sobre PERDCOMP e preenchimento de campos",
      author: "Maria Souza",
    },
    {
      id: "3",
      title: "Melhores práticas para agilizar o processo de PERDCOMP",
      author: "Ana Costa",
    },
    {
      id: "4",
      title: "Novas funcionalidades da plataforma CIC",
      author: "Pedro Lima",
    },
    {
      id: "5",
      title: "Erros comuns ao usar PERDCOMP",
      author: "Lucas Almeida",
    },
  ];


  const [selectedTopic, setSelectedTopic] = useState(mockForumTopics[0].id);
  
  

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Bem-vindo de volta" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="15"
            subtitle="Trilhas completadas"
            progress="0.75"
            increase="+10%"
            icon={
              <EmailIcon
                sx={{ color: "#000", fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="5,235"
            subtitle="Usuários ativos"
            progress="0.50"
            increase="+8%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2,341"
            subtitle="Novos usuários"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="500"
            subtitle="Discussões no fórum"
            progress="0.18"
            increase="+18%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <h5 style={{ fontWeight: "600", color: colors.grey[100] }}>
                Progresso nas Trilhas CIC e PERDCOMP
              </h5>
              <h3 style={{ fontWeight: "bold", color: colors.greenAccent[500] }}>
                80% Concluído
              </h3>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">

          {mockForumTopics.map((topic) => (
  <Box
    key={topic.id}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    borderBottom={`2px solid #fff`}
    p="15px"
    onClick={() => setSelectedTopic(topic.id)}
    style={{
      cursor: "pointer",
      backgroundColor: selectedTopic === topic.id ? "rgb(39 99 247)" : "inherit",
      color: selectedTopic === topic.id ? "#ffffff" : "#758ba5", 
    }}
  >
    <Box>
      <h5 style={{ color: selectedTopic === topic.id ? "#ffffff" :"#1c3049", fontWeight: "600" }}>
        {topic.title}
      </h5>
      <p style={{ color: selectedTopic === topic.id ? "#ffffff" : colors.grey[100] }}>{topic.author}</p>
    </Box>
    <Box color={colors.grey[100]}>{topic.lastActivity}</Box>
  </Box>
))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
