import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        Dictionary
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">Coded by Amy | <a href="https://github.com/amysteel/dictionary-project" target="_blank" rel="noreferrer">View on Github</a></footer>
      </div>
    </div>
  );
}
