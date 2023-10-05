import React, { useState } from 'react';
import '../styles/formulario.css';
import Sidebar from './Sidebar';
import axios from 'axios';

function Venda() {
  const [produtosLista, setProdutosLista] = useState([]);
  const [valorCampo, setValorCampo] = useState('');
  const [formData, setFormData] = useState({
    dataVenda: '',
    vendedor: '',
    cliente: '',
    observacao: '',
    valorVenda: '',
    produto: '',
    quantidade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosDaVenda = {
      ...formData
    };

    e.preventDefault();
    axios.post('https://api-pedramoura.kmr.dev.br/vendas/criar', dadosDaVenda)
      .then((response) => {
        if (response.status === 201) {
          alert(response.data);
          setFormData({
            descricao: '',
            valor: '',
          });
        } else {
          console.error('Erro ao criar o produto:', response.data);
        }
      })
      .catch((error) => {
        console.error('Erro ao criar o produto:', error);
      });
  };

  return (
    <div class="container">
      <div class="row g-0">
        <div class="col-sm-2">
          <Sidebar />
        </div>
        <div class="col-sm-10">
          <form className="form-container" onSubmit={handleSubmit}>
            <h2>Venda</h2>
            <div className="form-group">
              <label htmlFor="dataVenda">Data da venda:</label>
              <input
                type="date"
                id="dataVenda"
                name="dataVenda"
                value={formData.dataVenda}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="vendedor">Vendedor:</label>
              <input
                type="text"
                id="vendedor"
                name="vendedor"
                value={formData.vendedor}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cliente">Cliente:</label>
              <input
                type="text"
                id="cliente"
                name="cliente"
                value={formData.cliente}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="observacao">Observação:</label>
              <textarea
                type="text"
                id="observacao"
                name="observacao"
                value={formData.observacao}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="produto">Produto:</label>
              <input
                type="text"
                id="produto"
                name="produto"
                value={formData.produto}
                onChange={handleChange}
                className="form-control"
              />

              <label htmlFor="quantidade">Quantidade:</label>
              <input
                type="number"
                id="quantidade"
                name="quantidade"
                value={formData.quantidade}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="valorVenda">Valor da venda:</label>
              <input
                type="text"
                id="valorVenda"
                name="valorVenda"
                placeholder="R$ 0,00"
                className="form-control"
                value={formData.valor}
                onChange={handleChange}
              />
            </div>
            <div>
            </div>
            <br />
            <button type="submit" className="btn btn-submit">Salvar venda</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Venda;