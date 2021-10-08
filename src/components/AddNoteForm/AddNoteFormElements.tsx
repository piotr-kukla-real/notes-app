import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

export const FormControl = styled(TextField)`
  .MuiInputBase-root {
    font-size: 1.125rem;
  }
  .MuiFormLabel-root {
    font-size: 1.125rem;
  }
  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, -8px) scale(0.8);
  }
  .MuiFormHelperText-root {
    font-size: 1rem;
    margin-top: 0;
    text-align: right;
  }
`;

export const SubmitBtn = styled(Button)`
  font-size: 1.125rem;
  border: 2px solid hsla(0, 0%, 0%, 0.13);

  @media (hover: hover) {
    &:hover {
      border-color: hsla(0, 0%, 0%, 0.4);
    }
  }
  &:active {
    border-color: hsl(202, 100%, 50%);
  }
`;
