import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Error from './Pages/Error';
import SingleRoom from './Pages/SingleRoom'
import Rooms from './Pages/Rooms'
import {Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return (
  <div>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms/" component={Rooms}/>
    <Route exact path="/rooms/:slug" component={SingleRoom}/>
    <Route component={Error}/>
    </Switch>
  </div>
    
  );
}

export default App;
