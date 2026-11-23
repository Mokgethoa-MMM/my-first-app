import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Mokgethoa!
        </p>
        <a
          className="App-link"
          href="https://propelleraero.com/dirtmate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Propeller DirtMate
        </a>
      </header>
    </div>
  );
}

export default App;