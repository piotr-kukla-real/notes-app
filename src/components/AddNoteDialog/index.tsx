import AddNoteForm from 'components/AddNoteForm';
import { GrClose } from 'react-icons/gr';
import {
  AddNoteWrapper,
  CloseBtn,
  StyledDialog,
} from './AddNoteDialogElements';

type handleClose = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  reason?: 'backdropClick' | 'escapeKeyDown',
) => void;

const AddNoteDialog: React.FC<propTypes['AddNoteDialog']> = ({
  open,
  setOpen,
}) => {
  const handleClose: handleClose = (e, reason) => {
    if (reason === 'backdropClick') {
      return;
    }
    setOpen(false);
  };

  return (
    <StyledDialog open={open} fullWidth onClose={handleClose}>
      <AddNoteWrapper className="media-px">
        <CloseBtn onClick={handleClose}>
          <GrClose />
        </CloseBtn>
        <AddNoteForm />
      </AddNoteWrapper>
    </StyledDialog>
  );
};

export default AddNoteDialog;
