import { useState } from 'react';

const SelecionarMotoboy = () => {
  const [motoboys] = useState(['Carlos', 'João', 'Ana']);
  const [selecionado, setSelecionado] = useState('');

  const handleSelecionar = (e) => {
    setSelecionado(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Seleção Diária de Motoboy</h1>
      <select onChange={handleSelecionar} style={{ padding: '10px', margin: '10px' }}>
        <option value="">Selecione um Motoboy</option>
        {motoboys.map((motoboy, index) => (
          <option key={index} value={motoboy}>{motoboy}</option>
        ))}
      </select>

      {selecionado && <p>Motoboy Selecionado: <strong>{selecionado}</strong></p>}
    </div>
  );
};

export default SelecionarMotoboy;