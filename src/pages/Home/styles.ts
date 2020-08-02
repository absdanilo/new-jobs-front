import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  width: 50%;
  margin: 0 auto;
  padding: 80px 10px 0 0;
`;

export const Desciption = styled.div`
  width: 100%;
  margin-right: 20px;
`;

export const DesciptionContent = styled.div`
  padding: 10px 0;
  border-top: 1px solid #fff;
  text-align: justify;

  > p {
    padding: 10px 0;
    font-size: 18px;
    line-height: 1.75;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;

  span {
    font-weight: 800;
    font-size: 32px;

    & + span {
      font-weight: normal;
      font-size: 16px;
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  background: #fff;
  margin-left: 20px;
  width: 100%;
  position: relative;

  > h1 {
    color: #082497;
    margin: 20px 0 7px 0;
    text-transform: uppercase;
    font-size: 26px;
  }

  > button {
    background: #082497;
    width: 100%;
    margin-top: 60px;

    &:hover {
      background: ${shade(0.2, '#082497')};
    }
  }

  > svg {
    color: #000;
    position: absolute;
    top: 110px;
    left: 31px;
    z-index: 2;
  }

  > select {
    width: 100%;
    border-bottom: 1px solid #082497;
    margin-top: 30px;
    outline: 0;
    font-size: 14px;
    padding-left: 40px;
    color: #666360;
  }
`;

export const Terms = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 40px;

  label {
    color: #082497;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-left: 10px;
    cursor: pointer;
  }

  input {
    text-align: center;
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }

  span {
    align-self: center;
    margin-left: 50px;
    color: #082497;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;
  }
`;
