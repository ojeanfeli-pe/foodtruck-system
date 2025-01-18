import { useState } from "react";

const CadastroProdutos = () =>{
    const [nome,setNome] = useState('');
    const [categoria,setCategoria] = useState('');
    const [preco,setPreco] = useState('');
    const [produtos,setProdutos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoProduto = {nome, categoria, preco};
        setProdutos([...produtos, novoProduto]);

        //LIMPA O CAMPO APÓS SER FEITO O CADASTRO
        setNome('');
        setCategoria('');
        setPreco('');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Cadastro de Produtos</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome do Produto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              style={{ padding: '10px', margin: '10px' }}
            />
            <br />
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
              style={{ padding: '10px', margin: '10px' }}
            >
              <option value="">Selecione a Categoria</option>
              <option value="Lanche">Lanche</option>
              <option value="Bebida">Bebida</option>
              <option value="Porção">Porção</option>
            </select>
            <br />
            <input
              type="number"
              placeholder="Preço (R$)"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
              step="0.01"
              style={{ padding: '10px', margin: '10px' }}
            />
            <br />
            <button type="submit" style={{ padding: '10px 20px' }}>Cadastrar</button>
          </form>
    
          <h2 style={{ marginTop: '30px' }}>Produtos Cadastrados</h2>
          <ul>
            {produtos.map((produto, index) => (
              <li key={index}>
                {produto.nome} - {produto.categoria} - R${produto.preco}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default CadastroProdutos;