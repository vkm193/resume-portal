import React from 'react';
import './App.scss';
import {BrowserRouter }from 'react-router-dom';
import {HeaderComponent} from './Components/Header/header.component';
import {FooterComponent} from './Components/Footer/footer.component';
import {MainComponent} from './Components/ContentArea/Main/main.component';

function App() {
  return (
    <BrowserRouter >
      <div id="app">
        <HeaderComponent />
        <div className="container fluid app">
          <MainComponent />
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
