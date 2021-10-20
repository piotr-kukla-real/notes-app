import ListItem from 'components/ListItem';
import useNotes from 'components/NotesProvider';

const MappedNotes: React.FC = () => {
  const { notes } = useNotes()!;

  return (
    <>
      {notes.map((note) => (
        <ListItem note={note} key={note.id} />
      ))}
    </>
  );
};

export default MappedNotes;
