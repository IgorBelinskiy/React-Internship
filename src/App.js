
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Biography from './components/Biography/Biography';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="container">
          <Header />
          <Navbar />
          <Route exact path="/bk" render={() => <Content />} />
          <Route exact path="/bio" render={() => <Biography />} />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
