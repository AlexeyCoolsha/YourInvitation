import './App.css'
import Logo from '../shared/ui/Logo/Logo';

function App() {
  return (
    <div className="app">
      <Logo />
      <h1>Твоё приглашение</h1>
      <p>Создавай красивые приглашения для важных событий.</p>
      <div className="block">
        <p className="text">Text1</p>
      </div>
      <p className="text">Text2</p>
    </div>
  );
}

export default App;