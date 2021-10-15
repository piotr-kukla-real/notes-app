import { NotesListContainer, NotesUL } from './NotesListElements';

const NotesList: React.FC = () => (
  <NotesListContainer>
    <NotesUL component="ul" container justifyContent="center">
      {/* Map ListItem here */}
    </NotesUL>
  </NotesListContainer>
);

export default NotesList;
