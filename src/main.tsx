/// <reference types="vite-plugin-svgr/client" />

import './reset.css';
import './main.css';
import 'primereact/resources/themes/vela-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';

import PrimeReact from 'primereact/api';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

PrimeReact.ripple = true;

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
