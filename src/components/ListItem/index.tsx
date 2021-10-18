import type { Note } from 'components/NotesProvider';
import {
  NoteLI,
  NoteTitle,
  NoteText,
  NoteTime,
  StyledCard,
  StyledButtonBase,
} from './ListItemElements';

const ListItem: React.FC<Props> = ({ note }) => {
  const { title, text, id, date } = note;

  return (
    <NoteLI component="li" item>
      <StyledButtonBase component="div">
        <StyledCard variant="outlined">
          <NoteTitle variant="h3" noWrap className="card-item-p">
            {title}
          </NoteTitle>
          <NoteText className="card-item-p">{text}</NoteText>
          <NoteTime
            variant="body2"
            align="right"
            className="card-item-p"
            noWrap
            color="textSecondary"
          >
            {date}
          </NoteTime>
        </StyledCard>
      </StyledButtonBase>
    </NoteLI>
  );
};

export interface Props {
  note: Note;
}

export default ListItem;
