import { useState } from 'react';

const CadastroClientes = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    bairro: '',
    rua: '',
    numero: '',
    celular: ''
  });

  const [clientes, setClientes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClientes([...clientes, cliente]);
    setCliente({ nome: '', bairro: '', rua: '', numero: '', celular: '' });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Cadastro de Clientes</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input type="text" name="nome" placeholder="Nome" value={cliente.nome} onChange={handleChange} required style={{ padding: '10px', margin: '5px' }} />
        <input type="text" name="bairro" placeholder="Bairro" value={cliente.bairro} onChange={handleChange} required style={{ padding: '10px', margin: '5px' }} />
        <input type="text" name="rua" placeholder="Rua" value={cliente.rua} onChange={handleChange} required style={{ padding: '10px', margin: '5px' }} />
        <input type="text" name="numero" placeholder="Número" value={cliente.numero} onChange={handleChange} required style={{ padding: '10px', margin: '5px' }} />
        <input type="text" name="celular" placeholder="Celular" value={cliente.celular} onChange={handleChange} required style={{ padding: '10px', margin: '5px' }} />
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>Cadastrar</button>
      </form>

      <h2>Clientes Cadastrados</h2>
      <ul style={{ listStyle: 'none' }}>
        {clientes.map((cli, index) => (
          <li key={index}>
            {cli.nome} - {cli.bairro}, {cli.rua}, {cli.numero} - {cli.celular}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CadastroClientes;