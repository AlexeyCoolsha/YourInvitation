import './App.css';

import { Link } from 'react-router';
import Logo from '../shared/ui/Logo/Logo';
import Button from '../shared/ui/Button/Button';

function App() {
  return (
    <div className="app">
      <Logo />
      <h1>Твоё приглашение</h1>
      <Button as="a" href="https://google.com" >Текст кнопки</Button>
      <Button>Текст кнопки</Button>
      <Button as={Link}>Link</Button>
      <p>Создавай красивые приглашения для важных событий.</p>
      <div className="block">
        <p className="text">Text1</p>
      </div>
      <p className="text">Text2</p>
    </div>
  );
}

export default App;
