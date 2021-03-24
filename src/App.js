
import './App.css';
import Content from './components/Content/Content';
import Biography from './components/Biography/Biography';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Api from './components/API/Api';
import Home from './components/Home/Home';
import Modall from './components/API/Users/Modall';




const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bk" component={Content} />
        <Route exact path="/bio" component={Biography} />
        <Route exact path="/api" component={Api} />
        <Route exact path="/api/:id" component={Modall} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
