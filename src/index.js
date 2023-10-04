import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserAuthContextProvider } from "./context/userAuthContext";
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserAuthContextProvider>
      <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </UserAuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
