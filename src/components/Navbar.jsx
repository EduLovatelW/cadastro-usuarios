import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Cadastro de Usuários
        </Typography>
        <Button color="inherit" component={Link} to="/">Cadastrar</Button>
        <Button color="inherit" component={Link} to="/usuarios">Usuários</Button>
      </Toolbar>
    </AppBar>
  );
}
