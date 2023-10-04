import React, { useState } from 'react';
import '../styles/formulario.css';
import VendaProdutos from './VendaProdutos';

function Venda() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
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
        // Aqui você pode enviar os dados do formulário para o servidor ou fazer o que for necessário com eles.
        console.log(formData);
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
            value={formData.nome}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Observação:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <VendaProdutos />
        <br/>
        <button type="submit" className="btn btn-submit">Salvar venda</button>
        {/* <div className="error-message">Erro</div> */}
      </form>
    );
  }
  
  
  export default Venda;
  