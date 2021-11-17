import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnimalView from './views/AnimalView';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import NotFoundScreen from './views/NotFoundScreen';
import { ProtectedRoute } from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/blogs' exact component={Login} />
        <Route path='/login' exact component={Login} />
        <ProtectedRoute path='/dashboard' exact>
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute path='/dashboard/:id' exact>
          <AnimalView />
        </ProtectedRoute>
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
