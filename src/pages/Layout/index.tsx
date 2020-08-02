import React from 'react';

import { Container, Wrapper } from './styles';
import Nav from '../../components/Nav';
import Home from '../Home';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
      </Wrapper>

      <Home />
    </Container>
  );
};

export default Layout;
