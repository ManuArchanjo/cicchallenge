import React, { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Divider from "@mui/material/Divider";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Definindo os módulos, que antes eram o fórum
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (moduleId) => {
    if (expandedModule === moduleId) {
      setExpandedModule(null);
    } else {
      setExpandedModule(moduleId);
    }
  };

  const modulos = [
    {
      id: 1,
      title: "Conteúdo 1 - Vídeo (30s)",
      type: "Vídeo",
      duration: "30s",
      progress: "75%",
      items: ["Material de apoio - Arquivo", "Apresentação - Arquivo", "Avaliação - Questionário"],
    },
    {
      id: 2,
      title: "Conteúdo 2 - Vídeo (45s)",
      type: "Vídeo",
      duration: "45s",
      progress: "0%",
      items: [],
    },
    {
      id: 3,
      title: "Conteúdo 3 - Vídeo (60s)",
      type: "Vídeo",
      duration: "60s",
      progress: "0%",
      items: [],
    },
    {
      id: 4,
      title: "Avaliação do curso",
      type: "Questionário",
      duration: "15min",
      progress: "0%",
      items: [],
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Bem-vindo de volta" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
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

        {/* ROW 2 */}
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
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Progresso nas Trilhas CIC e PERDCOMP
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                80% Concluído
              </Typography>
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

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="20px"
          borderRadius="8px"
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color={colors.grey[100]}>
              Módulos do Curso
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />

          {/* Exibição dos Módulos no estilo desejado */}
          {modulos.map((modulo) => (
            <Box key={modulo.id} mb={2} p={2} sx={{ border: '1px solid #ddd', borderRadius: '8px' }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center">
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#5F4BB6' }}>
                    {modulo.title}
                  </Typography>
                  <Typography variant="body2" sx={{ ml: 2 }}>
                    {modulo.type} • {modulo.duration}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#5F4BB6' }}>
                    {modulo.progress}
                  </Typography>
                  <IconButton onClick={() => toggleModule(modulo.id)}>
                    {expandedModule === modulo.id ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </IconButton>
                </Box>
              </Box>

              {expandedModule === modulo.id && (
                <Box mt={2}>
                  <Divider sx={{ mb: 2 }} />
                  {modulo.items.length > 0 ? (
                    modulo.items.map((item, index) => (
                      <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                        {item}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body2" sx={{ color: '#999' }}>
                      Não há itens adicionais.
                    </Typography>
                  )}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
