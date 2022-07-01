import './App.css';
import scientists from './data';
import ScientistButton from '../ScientistButton/ScientistButton';

function App() {
  function showQuote(quote) {
    alert(quote)
  };

  return (
    <div className="container">
      <h1>HELLO SCIENTIST</h1>
      {scientists.map((scientist, index) => (
        <ScientistButton
          key = {index}
          name = {scientist.name}
          country = {scientist.country}
          birth = {scientist.birth}
          death = {scientist.death}
          quote = {scientist.quote}
          showQuote = {showQuote}
        />
      ))}
    </div>
  );
}

export default App;