import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Nav from './Components/Nav'
import Reminder from './Pages/Reminder'
import Todo from './Pages/Todo'
import Main from './Pages/Main'

function App() {
  return (
    <div className='container__app'>
      <BrowserRouter>
        <div className='container__nav'>
          <Nav /> 
        </div>
        <div className='container__pages'>
          <Switch>
            <Route path="/todolist">
              <Todo />
            </Route> 
            <Route path="/reminder">
              <Reminder />
            </Route>
            <Route>
              <Main />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
