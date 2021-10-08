import { GrAdd } from 'react-icons/gr';
import { useState } from 'react';
import AddNoteDialog from 'components/AddNoteDialog';
import { BtnContainer, BtnWrapper, Btn } from './AddNoteBtnElements';

const AddNoteBtn: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <BtnContainer>
        <BtnWrapper>
          <Btn onClick={handleOpen}>
            <GrAdd />
          </Btn>
        </BtnWrapper>
      </BtnContainer>
      <AddNoteDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default AddNoteBtn;
