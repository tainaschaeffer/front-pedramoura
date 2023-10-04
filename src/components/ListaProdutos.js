import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import '../styles/formulario.css';
import Sidebar from './Sidebar';

function ListaProdutos() {

    const [formData, setFormData] = useState({
        descricao: '',
        valor: '',
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
      <div class="container">
            <div class="row g-0">
                <div class="col-sm-2">
                    <Sidebar/>
                </div>
            <div class="col-sm-10">
                <form className="form-container" onSubmit={handleSubmit}>
                <h2>Produto</h2>
                    <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        id="descricao"
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        className="form-control"
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="valor">Valor:</label>
                    <InputMask
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
                    {/* <div className="error-message">Erro</div> */}
                </form>
            </div>
        </div>
            </div>
    );
  }
  
  
  export default ListaProdutos;
  