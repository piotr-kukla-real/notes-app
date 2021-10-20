import NotesList from 'components/NotesList';
import useNotes from 'components/NotesProvider';
import { Theme, useMediaQuery } from '@material-ui/core';
import { useEffect } from 'react';
import { StyledMain, StyledPagination } from './MainElements';

const Main: React.FC = () => {
  const { setNotes, info } = useNotes()!;
  const { currentPage, maxPage } = info;

  const isMobile = useMediaQuery<Theme>(
    (theme) => theme.breakpoints.down('xs'),
    { noSsr: true },
  );

  const onChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setNotes({ type: 'CURRENT_PAGE', payload: value });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const paginationCheck = maxPage !== 1;
  const paginationSize = isMobile ? 'small' : 'medium';

  return (
    <StyledMain>
      <NotesList />
      {paginationCheck && (
        <StyledPagination
          variant="outlined"
          page={currentPage}
          count={maxPage}
          size={paginationSize}
          onChange={onChange}
          className="bottom"
        />
      )}
    </StyledMain>
  );
};

export default Main;
