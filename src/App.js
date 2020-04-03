//  REACT
import React, { lazy, Suspense } from 'react'

//  COMPONENTS
import { home, contact, spain } from './conf/routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainMenu from './components/MainMenu'

//  STYLES
import './App.css';

//  Esto lo que hace es para componentes grandes, los llama de forma lazy. Mientras renderiza el fallback ejecuta la llamada asíncrona para cargarla en segundo plano y cuando el componente está listo lo renderiza.
const Home = lazy(() => import('./components/pantallas/Home'))
const Spain = lazy(() => import('./components/pantallas/Spain'))
const Contact = lazy(() => import('./components/pantallas/Contact'))

export default function App() {
  return (
    <Router>
      <Suspense fallback={<h3>Loading...</h3>}>
        <div>
          <MainMenu />
          <Switch>
            <Route path={home()}>
              <Home />
            </Route>
            <Route path={spain()}>
              <Spain />
            </Route>
            <Route path={contact()}>
              <Contact />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}