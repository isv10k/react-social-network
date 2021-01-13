import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href="#">home</a>
      <a href="#">News Feeed</a>
      <a href="#">Messages</a>
    </div>
  );
}
export default App;
