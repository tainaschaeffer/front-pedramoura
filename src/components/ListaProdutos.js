import React, { useState, useEffect } from 'react';
import '../styles/formulario.css';
import Sidebar from './Sidebar';
import axios from 'axios';

function ListaProdutos() {
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
    // Aqui você pode enviar os dados do formulário para o servidor ou fazer o que for necessário com eles.
    console.log(formData);
  };

  // Função para excluir um produto
  const handleExcluir = (id) => {
    // Bate na API para excluir o produto
    axios.delete(`https://api-pedramoura.kmr.dev.br/produtos/deletar/${id}`)
      .then((response) => {
        // Verificar se a exclusão foi bem-sucedida (você pode verificar o status de resposta)
        if (response.status === 200) {
          // Remover o produto da lista local
          const novosProdutos = produtos.filter((produto) => produto.id !== id);
          setProdutos(novosProdutos);
        } else {
          console.error('Falha ao excluir o produto:', response.data);
        }
      })
      .catch((error) => {
        console.error('Erro ao excluir o produto:', error);
      });
  };

  //Bate na API para listar os produtos
  useEffect(() => {
    // Substitua este trecho pela solicitação Axios para sua API
    axios.get('https://api-pedramoura.kmr.dev.br/produtos/listar')
      .then((response) => {
        // A resposta da API deve conter os dados que você precisa.
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
            <h2>Lista de Produtos</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>Ações</th> {/* Coluna para o botão de exclusão */}
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.valor}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleExcluir(produto.id)}
                      >
                        Excluir
                      </button>
                    </td>
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

export default ListaProdutos;
