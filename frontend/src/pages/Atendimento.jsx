import { useState } from 'react';
import ImpressaoPedido from '../components/ImpressaoPedido';


const Atendimento = () => {
  const [tipoAtendimento, setTipoAtendimento] = useState('');
  const [pedido, setPedido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pedido para ${tipoAtendimento}: ${pedido}`);
    setTipoAtendimento('');
    setPedido('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Atendimento</h1>
      <form onSubmit={handleSubmit}>
        <select value={tipoAtendimento} onChange={(e) => setTipoAtendimento(e.target.value)} required style={{ padding: '10px', margin: '10px' }}>
          <option value="">Selecione o tipo de atendimento</option>
          <option value="Mesa">Mesa</option>
          <option value="Carro">Carro</option>
          <option value="Viagem">Viagem</option>
        </select>
        <br />
        <textarea
          placeholder="Descreva o pedido"
          value={pedido}
          onChange={(e) => setPedido(e.target.value)}
          required
          style={{ width: '300px', height: '100px', padding: '10px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>Registrar Pedido</button>
        {pedido && <ImpressaoPedido pedido={pedido} />}

      </form>
    </div>
  );
};

export default Atendimento;