
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Biography from './components/Biography/Biography';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Api from './components/API/Api';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="container">
          <Header />
          <Navbar />
          <div className="wrapper">
            <Route exact path="/bk" render={() => <Content />} />
            <Route exact path="/bio" render={() => <Biography />} />
            <Route exact path="/api" render={() => <Api />} />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
