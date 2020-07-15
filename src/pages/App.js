import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Menu from '../components/Menu';
import Usuarios from '../components/Usuarios';
import HomeImage from '../components/HomeImage';
// import Home from '../components/'

const Tareas = () => <div>
  Tareas
</div>

const App = () => (
  <BrowserRouter>
    {/* <Menu />
    <Route exact path='/' component={ Usuarios } />
    <Route exact path='/tareas' component={ Tareas } /> */}
    <Switch>
      <Route exact path='/index' component={ HomeImage } />
      <Route exact path='/' component={ Usuarios } />
      <Route exact path='/tareas' component={ Tareas } />
    </Switch>

  </BrowserRouter>
);

export default App;
