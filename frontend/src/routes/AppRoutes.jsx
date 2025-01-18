import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from "../pages/Dashboard";
import CadastroProdutos from "../pages/CadastroProdutos";
import ControlePedidos from "../pages/ControlePedidos";
import RelatorioSemanal from "../pages/RelatorioSemanal";
import CadastroMotoboys from "../pages/CadastroMotoboys";
import SelecionarMotoboy from "../pages/SelecionarMotoboy";
import CadastroClientes from "../pages/CadastroClientes";
import Atendimento from "../pages/Atendimento";
import PainelCaixa from "../pages/PainelCaixa/PainelCaixa";

const AppRoutes = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
                <Route path="/controle-pedidos" element={<ControlePedidos />} />
                <Route path="/relatorio-semanal" element={<RelatorioSemanal />} />
                <Route path="/cadastro-motoboys" element={<CadastroMotoboys />} />
                <Route path="/selecionar-motoboy" element={<SelecionarMotoboy />} />
                <Route path="/cadastro-clientes" element={<CadastroClientes />} />
                <Route path="/atendimento" element={<Atendimento />} /> 
                <Route path="/painel-caixa" element={<PainelCaixa />} /> 



                

            </Routes>
        </Router>
    );
};

export default AppRoutes;