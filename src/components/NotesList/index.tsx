import MappedNotes from 'components/MappedNotes';
import { NotesListContainer, NotesUL } from './NotesListElements';

const NotesList: React.FC = () => (
  <NotesListContainer>
    <NotesUL component="ul" container justifyContent="center">
      <MappedNotes />
    </NotesUL>
  </NotesListContainer>
);

export default NotesList;
