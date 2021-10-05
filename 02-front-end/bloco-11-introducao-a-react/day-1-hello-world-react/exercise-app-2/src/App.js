import './App.css';
import Header from './Header'
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content />
        <Footer />
      </header>
    </div>
  );
}

export default App;
