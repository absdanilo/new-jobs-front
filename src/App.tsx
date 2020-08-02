import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './pages/Layout';

const App: React.FC = () => {
  return (
    <>
      <Layout />
      <GlobalStyle />
    </>
  );
};

export default App;
