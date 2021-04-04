
import './App.css';
import Content from './pages/Content/Content';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Api from './pages/Api/Api';
import Home from './pages/Home/Home';
import Modal from './pages/Modal/Modal';
import BiographyContainer from './pages/Biography/BiographyContainer';




const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bk" component={Content} />
      <Route exact path="/bio" component={BiographyContainer} />
      <Route exact path="/api" component={Api} />
      <Route exact path="/api/:id" component={Modal} />
    </Switch>
  </BrowserRouter>
)


export default App;
