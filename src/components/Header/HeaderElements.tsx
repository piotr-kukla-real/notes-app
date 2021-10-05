import styled from 'styled-components';
import { GiNotebook } from 'react-icons/gi';
import { Typography, TypographyProps } from '@material-ui/core';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: ${({ theme }) => theme.palette.primary.main};
  padding: 10px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  min-width: 1px;
`;

interface IPageName extends TypographyProps {
  component?: string;
}

export const PageName = styled(Typography)<IPageName>`
  min-width: 1px;
`;

export const Logo = styled(GiNotebook)`
  width: 45px;
  height: 45px;
`;
