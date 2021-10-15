import { ButtonBase, Card, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import type { CompProp } from 'types';

export const NoteLI = styled(Grid)<CompProp>`
  flex-grow: 1;
  max-width: 300px;
  width: 270px;
  height: 265px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: none;
    width: 340px;
    height: auto;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    width: 100%;
  }
`;

export const StyledButtonBase = styled(ButtonBase)<CompProp>`
  width: 100%;
  height: 100%;
  transition: transform 0.3s, filter 0.3s;

  &:focus-visible {
    transform: scale(1.1);

    ${({ theme }) => theme.breakpoints.down(680)} {
      transform: none;
      filter: brightness(0.85);
    }
  }
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.secondary.light};
  height: 100%;
  width: 100%;
  padding: 10px 0;
`;

export const NoteTitle = styled(Typography)`
  background: ${({ theme }) => theme.palette.secondary.main};
  margin-bottom: 5px;
`;

export const NoteText = styled(Typography)`
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -webkit-line-clamp: 6;
  -moz-line-clamp: 6;
  overflow: hidden;
  max-height: 154px;
`;

export const NoteTime = styled(Typography)`
  margin-top: auto;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 20px;
  }
`;
