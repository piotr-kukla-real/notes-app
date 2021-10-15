import type { Note } from 'types';
import {
  NoteLI,
  NoteTitle,
  NoteText,
  NoteTime,
  StyledCard,
  StyledButtonBase,
} from './ListItemElements';

interface ListItem {
  note: Note;
}

const ListItem: React.FC<ListItem> = ({ note }) => {
  const { title, text, id, time } = note;

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
            {time}
          </NoteTime>
        </StyledCard>
      </StyledButtonBase>
    </NoteLI>
  );
};

export default ListItem;
