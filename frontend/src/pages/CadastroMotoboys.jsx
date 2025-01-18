import { useState } from 'react';

const CadastroMotoboys = () => {
  const [nome, setNome] = useState('');
  const [motoboys, setMotoboys] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoMotoboy = { nome };
    setMotoboys([...motoboys, novoMotoboy]);
    setNome('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Cadastro de Motoboys</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Motoboy"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={{ padding: '10px', margin: '10px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>Cadastrar</button>
      </form>

      <h2 style={{ marginTop: '30px' }}>Motoboys Cadastrados</h2>
      <ul>
        {motoboys.map((motoboy, index) => (
          <li key={index}>{motoboy.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default CadastroMotoboys;