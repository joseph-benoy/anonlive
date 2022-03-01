import './App.scss';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import React from 'react';
import routes from './routes';

function App() {
  const Content= ()=>{
    const route = useRoutes(routes);
    return route;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Content/>
      </BrowserRouter>
    </div>
  );
}

export default App;
