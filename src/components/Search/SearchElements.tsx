import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const StyledInput = styled(TextField)`
  width: 300px;

  .MuiInputBase-input {
    font-size: 1.25rem;
  }
  .MuiFormLabel-root {
    font-size: 1.25rem;
  }

  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, -8px) scale(0.75);
  }

  legend span {
    padding-right: 12px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
  }
`;
