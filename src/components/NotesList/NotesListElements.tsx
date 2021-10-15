import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import type { CompProp } from 'types';

export const NotesListContainer = styled.section``;

export const NotesUL = styled(Grid)<CompProp>`
  gap: 16px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: center;
  }
`;
