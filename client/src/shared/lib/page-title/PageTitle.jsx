import { useEffect } from 'react';
import { useLocation } from 'react-router';

const titles = {
  '/': 'Твоё приглашение — главная',
  '/templates': 'Шаблоны — Твоё приглашение',
  '/about': 'О проекте — Твоё приглашение',
  '/contacts': 'Контакты — Твоё приглашение',
};

function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] ?? 'Твоё приглашение';
  }, [pathname]);

  return null;
}

export default PageTitle;
