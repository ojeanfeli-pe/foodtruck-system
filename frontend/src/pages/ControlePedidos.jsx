import { useState } from "react";

const ControlePedidos = () => {
    const [pedido, setPedido] = useState('');
    const [tipoAtendimento, setTipoAtendimento] = useState('');
    const [pedidos, setPedidos] = useState([]);

    const handleSubmit= (e) => {
        e.preventDefault();

        const novoPedido = {pedido, tipoAtendimento };
        setPedidos([...pedidos, novoPedido]);

        setPedido('');
        setTipoAtendimento('');
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Controle de Pedidos</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Descrição do Pedido"
              value={pedido}
              onChange={(e) => setPedido(e.target.value)}
              required
              style={{ padding: '10px', margin: '10px' }}
            />
            <br />
            <select
              value={tipoAtendimento}
              onChange={(e) => setTipoAtendimento(e.target.value)}
              required
              style={{ padding: '10px', margin: '10px' }}
            >
              <option value="">Tipo de Atendimento</option>
              <option value="Mesa">Mesa</option>
              <option value="Carro">Carro</option>
              <option value="Viagem">Viagem</option>
            </select>
            <br />
            <button type="submit" style={{ padding: '10px 20px' }}>Adicionar Pedido</button>
          </form>
    
          <h2 style={{ marginTop: '30px' }}>Pedidos em Aberto</h2>
          <ul>
            {pedidos.map((item, index) => (
              <li key={index}>
                {item.pedido} - {item.tipoAtendimento}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default ControlePedidos;