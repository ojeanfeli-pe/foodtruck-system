import { Link } from 'react-router-dom';

const Dashboard = () => {
    return ( 
        <div style = {{textAlign: 'center', marginTop: '50px'}}>
            <h1>Painel Principal</h1>
            <p>Bem Vindo o Sistema do Queijo Moreno Lanches!</p>

        <nav style={{marginTop: '20px'}}>
            <Link to="/cadastro-produtos" style={{margin: '10px'}}>Cadastro de Produtos</Link>
            <Link to="/controle-pedidos" style={{margin: '10px'}}>Controle de Pedidos</Link>
            <Link to="/relatorios" style={{margin: '10px'}}>Relatórios</Link>
        </nav>
        </div>
    );
};

export default Dashboard;