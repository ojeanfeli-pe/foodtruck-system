import { useState } from "react";

const RelatorioSemanal = () =>{
    const [itens, setItens] = useState([
        { nome: 'Pão de Hambúrguer', quantidade: 30 },
        { nome: 'Carne Bovina', quantidade: 20 },
        { nome: 'Refrigerante', quantidade: 50 }
      ]);
    
      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Relatório Semanal de Itens Gastos</h1>
          <table style={{ width: '60%', margin: 'auto', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '10px' }}>Item</th>
                <th style={{ border: '1px solid black', padding: '10px' }}>Quantidade Utilizada</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black', padding: '10px' }}>{item.nome}</td>
                  <td style={{ border: '1px solid black', padding: '10px' }}>{item.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    
    export default RelatorioSemanal;