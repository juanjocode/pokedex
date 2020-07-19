import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Usuarios from '../components/Usuarios';
import PokeCards from '../pages/PokeCards';
import Home from '../pages/Home';


const Tareas = () => <div>
  Tareas
</div>

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/index/cards' component={ PokeCards } />
      <Route exact path='/index' component={ Home } />
      <Route exact path='/' component={ Usuarios } />
      <Route exact path='/tareas' component={ Tareas } />
    </Switch>

  </BrowserRouter>
);

export default App;
