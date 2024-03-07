import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Buttonc from './components/button';
import Headr from './components/headr';
import Footer from './components/footr';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Headr/>
    <App />
    <Buttonc/>
    <Footer/>
  </React.StrictMode>
);


