import { GrAdd } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import AddNoteDialog from 'components/AddNoteDialog';
import { pushState } from 'utils/functions';
import { BtnContainer, BtnWrapper, Btn } from './AddNoteBtnElements';

const AddNoteBtn: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    pushState({ url: 'add-note' });
    setOpen(true);
  };

  const popState = () => {
    const { pathname } = window.location;

    switch (pathname) {
      case '/add-note':
        setOpen(true);
        break;
      case '/':
        setOpen(false);
    }
  };

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === '/add-note') {
      setOpen(true);
    }

    window.addEventListener('popstate', popState);

    return () => window.removeEventListener('popstate', popState);
  }, []);

  return (
    <>
      <BtnContainer>
        <BtnWrapper>
          <Btn onClick={handleOpen}>
            <GrAdd />
          </Btn>
        </BtnWrapper>
      </BtnContainer>
      <AddNoteDialog open={open} />
    </>
  );
};

export default AddNoteBtn;
