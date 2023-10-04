import React, { useState } from 'react';
import '../styles/formulario.css';

function VendaProdutos() {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [produtosLista, setProdutosLista] = useState([]);

  const adicionarProduto = () => {
    if (produto.trim() === '' || quantidade <= 0) {
      return;
    }

    const novoProduto = { produto, quantidade };
    setProdutosLista([...produtosLista, novoProduto]);
    setProduto('');
    setQuantidade('');
  };

  return (
    <div className="form-container-produtos">
      <h2>Produtos</h2>
      <div className="form-group">
        <label htmlFor="produto">Produto:</label>
        <input
          type="text"
          id="produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
          className="form-control"
        />
        <label htmlFor="quantidade">Quantidade:</label>
        <input
          type="number"
          id="quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          className="form-control"
        />
        <br/>
        <button onClick={adicionarProduto} className="btn-submit">
          Adicionar
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {produtosLista.map((item, index) => (
            <tr key={index}>
              <td>{item.produto}</td>
              <td>{item.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendaProdutos;