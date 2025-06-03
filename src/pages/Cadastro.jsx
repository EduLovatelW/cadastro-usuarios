import { Container, Typography } from "@mui/material";
import UserForm from "../components/UserForm";

export default function Cadastro() {
  return (
    <Container>
      <Typography variant="h4" mt={2}>Cadastro de Usuário</Typography>
      <UserForm />
    </Container>
  );
}
