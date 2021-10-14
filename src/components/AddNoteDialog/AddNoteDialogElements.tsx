import styled from 'styled-components';
import { Dialog, IconButton } from '@material-ui/core';

export const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    width: calc(100%);
    max-height: calc(100%);
    margin: 0px;
  }
`;

export const AddNoteWrapper = styled.section`
  background: whitesmoke;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 30px;
  background: ${({ theme }) => theme.palette.primary.main};
  box-shadow: var(--inset-shadow-1);
`;

export const CloseBtn = styled(IconButton)`
  display: block;
  margin-left: auto;
  width: 40px;
  height: 40px;
  padding: 0px;
  background: ${({ theme }) => theme.palette.error.main};
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  transition: box-shadow 0.3s;

  &:active {
    box-shadow: none;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.error.dark};
  }
`;
