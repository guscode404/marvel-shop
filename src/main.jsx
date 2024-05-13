import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './providers/ShopContext.jsx';
import { ComicProvider } from './providers/ComicContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ComicProvider>
      <ShopProvider>
        <App />
      </ShopProvider>
    </ComicProvider>
  </BrowserRouter>
)
