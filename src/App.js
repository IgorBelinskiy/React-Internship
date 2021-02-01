
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
