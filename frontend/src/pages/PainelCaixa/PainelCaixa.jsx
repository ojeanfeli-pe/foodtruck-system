import { Link } from 'react-router-dom';

const PainelCaixa = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Painel do Caixa</h1>
      <nav>
        <ul>
          <li><Link to="/cadastro-item">Cadastrar Itens</Link></li>
          <li><Link to="/controle-estoque">Controle de Estoque</Link></li>
          <li><Link to="/relatorio">Relatórios Semanais</Link></li>
          <li><Link to="/cadastro-motoboy">Cadastrar Motoboy</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default PainelCaixa;