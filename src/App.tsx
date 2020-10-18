import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.scss';

const NotFound = lazy(() => import('./views/error/404'));

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route path="/404" component={NotFound}/>

          <Redirect from="*" to="/404"/>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
