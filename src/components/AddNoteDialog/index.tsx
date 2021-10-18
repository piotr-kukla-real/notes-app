import AddNoteForm from 'components/AddNoteForm';
import { GrClose } from 'react-icons/gr';
import {
  AddNoteWrapper,
  CloseBtn,
  StyledDialog,
} from './AddNoteDialogElements';

const AddNoteDialog: React.FC<Props> = ({ open, setOpen }) => {
  const handleClose: HandleClose = (e, reason) => {
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

export interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type HandleClose = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  reason?: 'backdropClick' | 'escapeKeyDown',
) => void;

export default AddNoteDialog;
