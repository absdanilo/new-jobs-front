import styled from 'styled-components';

interface Props {
  disabled?: boolean;
}

export default styled.button<Props>`
  background: none;
  color: ${(props) => (props.disabled ? 'rgba(0, 0, 0, 0.26)' : '#fff')};
  border: ${(props) =>
    props.disabled
      ? '1px solid rgba(0, 0, 0, 0.12)'
      : '1px solid rgba(0, 0, 0, 0.23)'};
  border-radius: 4px;
  cursor: pointer;
  outline: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02857em;
  line-height: 1.75;
  padding: 5px 16px;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }
`;
