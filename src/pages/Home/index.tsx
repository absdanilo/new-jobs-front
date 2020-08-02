import React from 'react';
import { FiMail, FiUser, FiPhone, FiLinkedin, FiFilter } from 'react-icons/fi';
import { IoIosBriefcase } from 'react-icons/io';
import {
  Container,
  Desciption,
  Title,
  DesciptionContent,
  BottomContent,
  Form,
  Terms,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Home: React.FC = () => {
  return (
    <Container>
      <Desciption>
        <Title>Seja bem-vindo ao ABStartups | Jobs!</Title>
        <DesciptionContent>
          <p>
            A Abstartups sabe que o cenário de pandemia causado pela COVID-19
            não está dos melhores, mas estamos aqui para fomentar o ecossistema
            de startups e ajudá-las neste momento.
          </p>
          <p>
            Por isso, desenvolvemos o Abstartups Jobs que funciona como um Banco
            de Talentos do ecossistema para que candidatos que estão em busca de
            recolocação no mercado e recrutadores em busca de novos talentos se
            conectem!
          </p>
          <p>Vamos juntos passar por este momento.</p>
          <p>Conte com a Associação Brasileira de Startups!</p>
          <p>
            Se você é um talento que foi impactado e está em busca de realocação
            profissional, compartilhe com a gente suas informações aqui e
            encontre novas oportunidades!
          </p>
          <BottomContent>
            <span>Jobs!</span>
            <span>ßeta version 1.3</span>
          </BottomContent>
        </DesciptionContent>
      </Desciption>
      <Form>
        <h1>Preencha o Formulário</h1>

        <FiFilter />
        <select name="" id="">
          <option value="1">Selecione sua área de atuação</option>
        </select>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input
          name="lastWork"
          icon={IoIosBriefcase}
          placeholder="Seu último emprego"
        />
        <Input name="email" icon={FiMail} placeholder="E-Mail" />
        <Input name="phoneNumber" icon={FiPhone} placeholder="Seu Telefone" />
        <Input name="linkedin" icon={FiLinkedin} placeholder="Linkedin(url)" />

        <Terms>
          <input type="radio" name="terms" id="terms" />
          <label htmlFor="terms">Aceitar os termos de uso</label>
          <span>Clique aqui e veja o termo de uso</span>
        </Terms>

        <Button disabled={false}>Finalizar Cadastro</Button>
      </Form>
    </Container>
  );
};

export default Home;
