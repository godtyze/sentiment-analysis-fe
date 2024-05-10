import { useEffect } from 'react';

import { ConfigProvider } from 'antd';

import './App.css';
import { THEME } from 'common';
import Header from 'components/header';
import Main from 'pages/main';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('default-theme');
  }, []);

  return (
    <ConfigProvider theme={THEME}>
      <Header />
      <Main />
    </ConfigProvider>
  );
}

export default App;
