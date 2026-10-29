import './App.css';
import { Routes, Route } from 'react-router';

import Header from '../widgets/Header/Header';
import PageTitle from '../shared/lib/page-title/PageTitle';

import HomePage from '../pages/home/ui/HomePage';
import TemplatesPage from '../pages/templates/ui/TemplatesPage';
import AboutPage from '../pages/about/ui/AboutPage';
import ContactsPage from '../pages/contacts/ui/ContactsPage';

function App() {
  return (
    <>
      <Header />
      <PageTitle />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
}

export default App;
