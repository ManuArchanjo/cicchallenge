import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Select, InputLabel, FormControl, Typography } from "@mui/material";

const LoginPage = () => {
  // Dados fixos pré-definidos
  const [userType, setUserType] = useState("admin"); // Tipo de usuário fixo como 'Admin'
  const [name, setName] = useState("João Silva"); // Nome fixo 'João Silva'
  const [role, setRole] = useState("developer"); // Cargo fixo 'Desenvolvedor'

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Tipo de Usuário: ${userType}, Nome: ${name}, Cargo: ${role}`);
    // Aqui vai a lógica para redirecionar ou autenticar o usuário
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", width: "300px", gap: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}
      >
        <Typography variant="h4" textAlign="center">Login</Typography>

        <FormControl fullWidth>
          <InputLabel id="user-type-label">Tipo de Usuário</InputLabel>
          <Select
            labelId="user-type-label"
            value={userType}
            label="Tipo de Usuário"
            onChange={handleUserTypeChange}
            required
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="colaborador">Colaborador</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          value={name}
          onChange={handleNameChange}
          required
        />

        <FormControl fullWidth>
          <InputLabel id="role-label">Cargo</InputLabel>
          <Select
            labelId="role-label"
            value={role}
            label="Cargo"
            onChange={handleRoleChange}
            required
          >
            <MenuItem value="developer">Desenvolvedor</MenuItem>
            <MenuItem value="designer">Designer</MenuItem>
            <MenuItem value="manager">Gerente</MenuItem>
            <MenuItem value="qa">QA</MenuItem>
            <MenuItem value="other">Outro</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Entrar
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
