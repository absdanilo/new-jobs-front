import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  /* border-radius: 10px; */
  padding: 25px 10px 0 10px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #082497;
  color: #000;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #000;
      border-color: #082497;
    `}

  ${(props) =>
    props.isField &&
    css`
      color: #082497;
    `}

  input {
    color: #000;
    flex: 1;
    outline: 0;
    width: 0;
    height: 30px;
    background: transparent;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
