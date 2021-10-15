import styled from 'styled-components';
import { GiNotebook } from 'react-icons/gi';
import { Typography } from '@material-ui/core';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: ${({ theme }) => theme.palette.primary.main};
  padding: 10px;
  border-radius: 0 0 5px 5px;
  position: sticky;
  top: 0px;
  box-shadow: var(--inset-shadow-1);
  z-index: 9;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    padding-bottom: 16px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 100%;
`;

export const PageName = styled(Typography)`
  max-width: 100%;
`;

export const Logo = styled(GiNotebook)`
  width: 45px;
  height: 45px;
`;
