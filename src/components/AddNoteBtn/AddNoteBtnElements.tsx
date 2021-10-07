import { Fab } from '@material-ui/core';
import styled from 'styled-components';

export const BtnContainer = styled.div`
  position: absolute;
  top: calc(100% - 6px);
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: 0 0 50% 50%;
`;

export const BtnWrapper = styled.div`
  margin-top: 4px;
  padding: 15px;
  padding-top: 7px;
  text-align: center;
  border-radius: 0 0 50% 50%;
  border: 2px solid hsla(0, 0%, 0%, 0.133);
  border-top: none;
`;

export const Btn = styled(Fab)`
  transition: box-shadow 0.3s;

  &:active {
    box-shadow: none;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;
