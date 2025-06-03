import { Container, Typography } from "@mui/material";
import UserList from "../components/UserList";

export default function ListaUsuarios() {
  return (
    <Container>
      <Typography variant="h4" mt={2}>Usuários Cadastrados</Typography>
      <UserList />
    </Container>
  );
}
