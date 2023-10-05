import React, { useState } from 'react';
import '../styles/formulario.css';

function VendaProdutos() {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [produtosLista, setProdutosLista] = useState([]);
  const [novoValor, setNovoValor] = useState('');
  var valor = 0;
  const novoProduto = { produto, quantidade, valor };
  const valorTotal = 0;

  const adicionarProduto = () => {

    const valor = event.target.value;
    setNovoValor(valor);

    if (produto.trim() === '' || quantidade <= 0) {
      alert("Informe o produto e a quantidade");
      return;
    }

    setProdutosLista([...produtosLista, novoProduto]);
    setProduto('');
    setQuantidade('');
  };

  const removerProduto = (index) => {
    const novaLista = [...produtosLista];
    console.log("removendo", produtosLista)
    novaLista.splice(index, 1);
    setProdutosLista(novaLista);
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
          <br />
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
                <td><button onClick={() => removerProduto(index)} className="btn btn-danger">Remover</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    );
  }

  export default VendaProdutos;