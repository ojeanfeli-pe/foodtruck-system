const ImpressaoPedido = ({ pedido }) => {
    const handleImprimir = () => {
      alert(`Pedido enviado para impressão:\n\n${pedido}`);
    };
  
    return (
      <button onClick={handleImprimir} style={{ padding: '10px', marginTop: '20px' }}>
        Imprimir Pedido
      </button>
    );
  };
  
  export default ImpressaoPedido;