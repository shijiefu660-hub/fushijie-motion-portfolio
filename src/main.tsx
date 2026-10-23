import React from 'react';
import {createRoot} from 'react-dom/client';
import PortfolioApp from './PortfolioApp';
import './intro.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><PortfolioApp/></React.StrictMode>);
