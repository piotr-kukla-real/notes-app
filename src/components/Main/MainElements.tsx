import styled from 'styled-components';
import { Pagination } from '@material-ui/lab';

export const StyledMain = styled.main`
  flex-grow: 1;
  padding: 90px 36px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;

  .MuiPaginationItem-root {
    color: #000;
  }
  .Mui-selected {
    background-color: hsla(202, 100%, 50%, 0.3);

    &:hover,
    &:focus-visible {
      background-color: hsla(202, 100%, 50%, 0.47);

      @media (hover: none) {
        background-color: hsla(202, 100%, 50%, 0.3);
      }
    }
  }
`;
