
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <div className="container">
        <Header />
        <Content state={props.state} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
