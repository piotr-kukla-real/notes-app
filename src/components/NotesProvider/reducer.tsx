import { format } from 'date-fns';
import type { Note, Notes } from '.';

const reducer = (notes: Notes, action: Action): Notes => {
  switch (action.type) {
    case 'ADD': {
      const { title, text } = action.payload;
      const id = Date.now();
      const date = format(id, 'dd/MM/yyyy, HH:mm');
      return [...notes, { title, text, id, date }];
    }
    case 'REMOVE':
      return notes.filter((note) => note.id !== action.payload);
    default:
      return notes;
  }
};

interface Payloads {
  Add: Pick<Note, 'title' | 'text'>;
  Remove: number;
}

export interface Add {
  type: 'ADD';
  payload: Payloads['Add'];
}

export interface Remove {
  type: 'REMOVE';
  payload: Payloads['Remove'];
}

type Action = Add | Remove;

export default reducer;
