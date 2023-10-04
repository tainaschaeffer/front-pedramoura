import React, { useState } from 'react';
import '../styles/formulario.css';
import InputMask from 'react-input-mask';
import VendaProdutos from './VendaProdutos';

function Venda() {
    const [produtosLista, setProdutosLista] = useState([]);

    const [formData, setFormData] = useState({
        dataVenda: '',
        vendedor: '',
        cliente:'',
        observacao: '',
        valorVenda: '',
        produtosLista: []
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const dadosDaVenda = {
            ...formData,
            produtosLista: formData.produtosLista, // Passa a lista de produtos para os dados da venda
          };
          
        console.log(dadosDaVenda);
      };
  
    return (
      <form className="form-container" onSubmit={handleSubmit}>
      <h2>Venda</h2>
        <div className="form-group">
          <label htmlFor="dataVenda">Data da venda:</label>
          <input
            type="date"
            id="dataVenda"
            name="dataVenda"
            // required={true}
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
            // required={true}
            value={formData.nome}
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
            // required={true}
            value={formData.nome}
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
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="valorVenda">Valor da venda:</label>
          <InputMask
            mask="R$ 99,999.99"
            maskChar=""
            type="text"
            id="valorVenda"
            name="valorVenda"
            placeholder="R$ 0,00"
            className="form-control"
            value={formData.valor}
            onChange={handleChange}
            readOnly={true}
          />
        </div>
        <VendaProdutos setProdutosLista={produtosLista}/>
        <br/>
        <button type="submit" className="btn btn-submit">Salvar venda</button>
        {/* <div className="error-message">Erro</div> */}
      </form>
    );
  }
  
  
  export default Venda;
  