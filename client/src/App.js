import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import "css-pro-layout/dist/css/css-pro-layout.min.css";
import './styles/App.scss';


import Init from './components/Init';
import AdminInterface from './components/AdminHome';
import SuperUserInterface from './components/SuperUserHome';
import UserInterface from './components/UserHome';
import Buscar_Producto from './components/Buscar_Producto';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Init}/>

      <Route path="/users/adm" exact component={AdminInterface}/>
      <Route path="/users/sup" exact component={SuperUserInterface}/>
      <Route path="/users/usr" exact component={UserInterface}/>

      <Route path="/users/Buscar_Producto" exact component={Buscar_Producto}/>


    </BrowserRouter>
  );
}

export default App;
