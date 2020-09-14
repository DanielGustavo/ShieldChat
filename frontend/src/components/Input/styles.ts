import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  border: var(--color-white) solid 2px;
  border-radius: 5px;
  padding: 14px 10px;
  display: flex;

  input {
    &::placeholder {
      color: #c9c9c9;
    }
    border: none;
    flex: 1;
    background: none;
    color: var(--color-white);
  }
`;

export const ErrorBox = styled.div`
  position: absolute;
  left: 90%;
  width: 0px;
  z-index: 100;

  svg {
    color: var(--color-red);
    position: relative;
    bottom: 2px;

    &:hover ~ div {
      opacity: 1;
    }
  }

  div {
    position: relative;
    background: var(--color-red);
    padding: 10px;
    width: 220px;
    right: 200px;
    border-radius: 5px;
    opacity: 0;
    transition: 0.3s;
  }
`;
