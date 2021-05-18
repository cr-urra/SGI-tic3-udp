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

import Dashboard from './components/Dashboard'

import Buscar_Pedido from './components/Buscar_Pedido';
import Crear_Pedido from './components/Crear_Pedido';

import Buscar_Proveedor from './components/Buscar_Proveedor';
import Ingresar_Proveedor from './components/Ingresar_Proveedor';

import Buscar_Producto from './components/Buscar_Producto';
import Ingresar_Producto from './components/Ingresar_Producto';

import Reporte_Costos_Finales from './components/Reporte_Costos_Finales'
import Reporte_Importacion_Producto from './components/Reporte_Importacion_Producto'
import Reporte_Importacion_Proveedor from './components/Reporte_Importacion_Proveedor'
import Reporte_Status_Agente_Aduana from './components/Reporte_Status_Agente_Aduana'

import Buscar_Usuario from './components/Buscar_Usuario';
import Crear_Usuario from './components/Crear_Usuario';

import Buscar_Agente_Aduana from './components/Buscar_Agente_Aduana';
import Ingresar_Agente_Aduana from './components/Ingresar_Agente_Aduana';

import Bancos from './components/Bancos'



function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Init}/>

      <Route path="/users/adm" exact component={AdminInterface}/>
      <Route path="/users/sup" exact component={SuperUserInterface}/>
      <Route path="/users/usr" exact component={UserInterface}/>

      <Route path="/users/Dashboard" exact component={Dashboard}/>

      <Route path="/users/Buscar_Pedido" exact component={Buscar_Pedido}/>
      <Route path="/users/Crear_Pedido" exact component={Crear_Pedido}/>

      <Route path="/users/Buscar_Proveedor" exact component={Buscar_Proveedor}/>
      <Route path="/users/Ingresar_Proveedor" exact component={Ingresar_Proveedor}/>

      <Route path="/users/Buscar_Producto" exact component={Buscar_Producto}/>
      <Route path="/users/Ingresar_Producto" exact component={Ingresar_Producto}/>

      <Route path="/users/Reporte_Costos_Finales" exact component={Reporte_Costos_Finales}/>
      <Route path="/users/Reporte_Importacion_Producto" exact component={Reporte_Importacion_Producto}/>
      <Route path="/users/Reporte_Importacion_Proveedor" exact component={Reporte_Importacion_Proveedor}/>
      <Route path="/users/Reporte_Status_Agente_Aduana" exact component={Reporte_Status_Agente_Aduana}/>

      <Route path="/users/Buscar_Usuario" exact component={Buscar_Usuario}/>
      <Route path="/users/Crear_Usuario" exact component={Crear_Usuario}/>

      <Route path="/users/Buscar_Agente_Aduana" exact component={Buscar_Agente_Aduana}/>
      <Route path="/users/Ingresar_Agente_Aduana" exact component={Ingresar_Agente_Aduana}/>

      <Route path="/users/Bancos" exact component={Bancos}/>

    </BrowserRouter>
  );
}

export default App;
