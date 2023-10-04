import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import ProdutosList from "./routes/ProdutosList";
import ErrorPage from "./routes/ErrorPage";
import ProdutosForm from './routes/ProdutosForm';
import VendasForm from './routes/VendasForm';
import VendasList from './routes/VendasList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/produtos/listar",
        element: <ProdutosList />,
      },
      {
        path: "/produtos/cadastrar",
        element: <ProdutosForm />,
      },
      {
        path: "/vendas/cadastrar",
        element: <VendasForm />
      },
      {
        path: "/vendas/listar",
        element: <VendasList />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
