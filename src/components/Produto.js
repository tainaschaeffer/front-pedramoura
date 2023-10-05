import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import '../styles/formulario.css';
import Sidebar from './Sidebar';
import axios from 'axios';

function Produto() {

    const [formData, setFormData] = useState({
        nome: '',
        valor: '',
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
        const dadosDoProduto = {
          ...formData
        };
        
        axios.post('https://api-pedramoura.kmr.dev.br/produtos/criar', dadosDoProduto)
          .then((response) => {
            if (response.status === 201) {
              console.log('Produto criado com sucesso:', response.data);
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
                    <Sidebar/>
                </div>
            <div class="col-sm-10">
                <form className="form-container" onSubmit={handleSubmit}>
                <h2>Produto</h2>
                    <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="form-control"
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="valor">Valor:</label>
                    <input
                    mask="R$ 99,999.99"
                    maskChar=""
                    type="text"
                    id="valor"
                    name="valor"
                    placeholder="R$ 0,00"
                    className="form-control"
                    value={formData.valor}
                    onChange={handleChange}
                />
                    </div>
                    <button type="submit" className="btn btn-submit">Salvar produto</button>
                </form>
            </div>
        </div>
            </div>    
    );
  }
  
  
  export default Produto;
  