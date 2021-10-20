import styled from 'styled-components';
import { Container, Snackbar } from '@material-ui/core';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledSnackbar = styled(Snackbar)`
  left: 50%;
  right: auto;
  top: 10px;
  bottom: auto;
  transform: translateX(-50%);
  max-width: 100%;

  ${({ theme }) => theme.breakpoints.down('xs')} {
    left: 8px;
    right: 8px;
    top: 10px;
    transform: none;
  }
`;
