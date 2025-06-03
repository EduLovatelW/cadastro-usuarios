import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper } from "@mui/material";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsers(data);
  }, []);

  return (
    <Paper sx={{ mt: 2, p: 2 }}>
      <List>
        {users.map((u, index) => (
          <ListItem key={index}>
            <ListItemText primary={u.nome} secondary={u.email} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
