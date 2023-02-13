import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { CartProvider } from './app/sharing/context/cart';
import { StoreProvider } from './app/sharing/context/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StoreProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </StoreProvider>
  </React.StrictMode>
);
