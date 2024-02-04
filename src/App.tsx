import React, { Suspense, useContext } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { className } from './helpers/className/className';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={className('app', {}, [theme])}>
      <button onClick={toggleTheme}>TODDle</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О Сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
