import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function UserForm() {
  const [user, setUser] = useState({ nome: "", email: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    users.push(user);
    localStorage.setItem("usuarios", JSON.stringify(users));
    setUser({ nome: "", email: "" });
    alert("Usuário cadastrado!");
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TextField fullWidth margin="normal" label="Nome" name="nome" value={user.nome} onChange={handleChange} />
      <TextField fullWidth margin="normal" label="Email" name="email" value={user.email} onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit}>Cadastrar</Button>
    </Box>
  );
}
