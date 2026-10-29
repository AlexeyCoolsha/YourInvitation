import React from 'react';
import Header from '../../../widgets/Header/Header';
import Button from '../../../shared/ui/Button/Button';
import { Link } from 'react-router';

function HomePage() {
  return (
    <main>
      <h1>Твоё приглашение</h1>
      <Button as="a" href="https://google.com">
        Текст кнопки
      </Button>
      <Button>Текст кнопки</Button>
      <Button as={Link}>Link</Button>
      <p>Создавай красивые приглашения для важных событий.</p>
      <div className="block">
        <p className="text">Text1</p>
      </div>
      <p className="text">Text2</p>
    </main>
  );
}

export default HomePage;
