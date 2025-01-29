import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';

import { ErrorBoundary } from '@/components/wrappers/error-boundary';
import { App } from './app';

const root = document.getElementById('root');

if (!root) throw new Error('root not exist');

createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
