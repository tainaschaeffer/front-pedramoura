import React, { useState, useEffect } from 'react';
import '../styles/formulario.css';
import Sidebar from './Sidebar';
import axios from 'axios';

function ListaVendas() {
  const [formData, setFormData] = useState({
    descricao: '',
    valor: '',
  });

  const [produtos, setProdutos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    axios.get('https://api-pedramoura.kmr.dev.br/vendas/listar')
      .then((response) => {
        const dadosDaAPI = response.data;
        setProdutos(dadosDaAPI);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row g-0">
        <div className="col-sm-2">
          <Sidebar />
        </div>
        <div className="col-sm-10">

        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Vendas Concluidas</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Vendedor</th>
                <th>Cliente</th>
                <th>Observação</th>
                <th>Data da Venda</th>
                <th>Valor da Venda</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.vendedor}</td>
                  <td>{produto.cliente}</td>
                  <td>{produto.observacao}</td>
                  <td>{produto.dataVenda}</td>
                  <td>{produto.valorVenda}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ListaVendas;