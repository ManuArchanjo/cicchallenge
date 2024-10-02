import React from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  LinearProgress,
  IconButton,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

const EmployeesTable = () => {
 
  const employees = [
    { name: 'Danilo Marques', email: 'danilo@gmail.com', progress: 7, score: 90 },
    { name: 'Carla Silva', email: 'carla@gmail.com', progress: 66, score: 860 },
    { name: 'Gabriel Souza', email: 'gabriel@gmail.com', progress: 43, score: 580 },
    { name: 'Vanessa Pereira', email: 'vanessa@gmail.com', progress: 51, score: 690 },
    { name: 'Julia Oliveira', email: 'julia@gmail.com', progress: 56, score: 750 },
    { name: 'Nayla Souza Ribeiro', email: 'naylasouzaribeiro@gmail.com', progress: 18, score: 240 },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" mb={2} sx={{ mb: '40px', mt:"90px" }}>
        <Button variant="contained" sx={{ backgroundColor: '#4a90e2', color: '#fff' }}>
          + adicionar usuário
        </Button>
        <IconButton sx={{ color: '#4a90e2' }}>
          <FilterListIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          p: '20px',
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <input type="checkbox" />
                </TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Progresso</TableCell>
                <TableCell>Pontuação</TableCell>
                <TableCell>Ação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell padding="checkbox">
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <LinearProgress
                        variant="determinate"
                        value={employee.progress}
                        sx={{
                          width: 80,
                          height: 8,
                          borderRadius: '10px',
                          backgroundColor: '#e0e0e0',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: '#4a90e2',
                          },
                        }}
                      />
                      <Typography>{`${employee.progress}%`}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{employee.score}</TableCell>
                  <TableCell>
                    <IconButton>
                      <PersonIcon sx={{ color: '#4a90e2' }} />
                    </IconButton>
                    <IconButton>
                      <LockIcon sx={{ color: '#4a90e2' }} />
                    </IconButton>
                    <IconButton>
                      <EditIcon sx={{ color: '#4a90e2' }} />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon sx={{ color: '#4a90e2' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default EmployeesTable;
