import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cadastro from "./pages/Cadastro";
import ListaUsuarios from "./pages/ListaUsuarios";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
      </Routes>
    </>
  );
}
