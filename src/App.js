import React, { Suspense } from 'react';
import './App.css';
import { useTranslation } from "react-i18next";

function HeaderComponent() {
  const { t, i18n } = useTranslation('common');
  return <h1>{t('welcome.title')}</h1>
}

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <HeaderComponent />
      </div>
    </Suspense>
  );
}

export default App;