import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';

const root = document.getElementById('root');

if (!root) throw new Error('root not exist');

createRoot(root).render(
  <StrictMode>
    <h1 className="text-5xl font-bold underline">Hello world</h1>
  </StrictMode>
);
