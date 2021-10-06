import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.palette.primary.main};
  padding: 10px;
  gap: 15px 30px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LeftColumn = styled.div`
  max-width: 100%;
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px 15px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    align-self: center;
  }
`;

export const LeftColItem = styled(Typography)`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const FooterLink = styled.a`
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }

  svg {
    width: 35px;
    height: 35px;
  }
`;
