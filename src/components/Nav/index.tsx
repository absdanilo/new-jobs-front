import React from 'react';
import Button from '../Button';
import absLogo from '../../assets/abs-jobs.png';
import {
  Container,
  MenuButton,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from './styles';

const Nav: React.FC = () => {
  return (
    <Container>
      <img src={absLogo} alt="Logo Jobs" />
      <MenuButton>
        <Button disabled={false}>Banco de Talentos</Button>
        <Button>Excluir Cadastro</Button>
        <FacebookIcon />
        <LinkedinIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YoutubeIcon />
      </MenuButton>
    </Container>
  );
};

export default Nav;
