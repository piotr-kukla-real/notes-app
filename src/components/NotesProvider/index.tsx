import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import reducer, { Add, Remove } from './reducer';

const initValue = (): Notes => {
  const check = localStorage.getItem('notes');
  if (check) {
    return JSON.parse(check);
  }
  localStorage.setItem('notes', JSON.stringify([]));
  return [];
};

export const NotesContext = createContext<Context | null>(null);

const useNotes = () => {
  const context = useContext(NotesContext);
  return context;
};

const notesPerPage: number = 42;

export const NotesProvider: React.FC = ({ children }) => {
  const [notes, dispatch] = useReducer(reducer, null, initValue);

  const [search, setSearch] = useState<RegExp | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const filteredNotes = search
    ? notes.filter((note) => search.test(note.title) || search.test(note.text))
    : notes;

  const refs = useRef({
    firstRender: true,
    maxPage: 1,
  });

  refs.current.maxPage = Math.ceil(filteredNotes.length / notesPerPage) || 1;

  const start = currentPage * notesPerPage - notesPerPage;
  const end = start + notesPerPage;

  const slicedNotes = filteredNotes.slice(start, end);

  useEffect(() => {
    if (refs.current.firstRender) {
      refs.current.firstRender = false;
      return;
    }
    const stringifiedNotes = JSON.stringify(notes);
    localStorage.setItem('notes', stringifiedNotes);
  }, [notes]);

  const setNotes: SetNotes = useCallback((options) => {
    const { type } = options;

    switch (type) {
      case 'ADD' || 'REMOVE': {
        const { payload } = options;
        dispatch({
          type,
          payload,
        });
        break;
      }
      case 'SEARCH': {
        const { payload } = options;
        setSearch(payload ? new RegExp(payload, 'i') : null);
        setCurrentPage(1);
        break;
      }
      case 'NEXT_PAGE': {
        setCurrentPage((prev) => {
          if (prev === refs.current.maxPage) {
            return prev;
          }
          return prev + 1;
        });
        break;
      }
      case 'PREVIOUS_PAGE': {
        setCurrentPage((prev) => {
          if (prev === 1) {
            return 1;
          }
          return prev - 1;
        });
        break;
      }
    }
  }, []);

  const value: Context = {
    notes: slicedNotes,
    setNotes,
    info: {
      firstPage: currentPage === 1,
      lastPage: refs.current.maxPage === currentPage,
      maxPage: refs.current.maxPage,
    },
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export interface Note {
  title: string;
  text: string;
  date: string;
  id: number;
}

interface Context {
  notes: Notes;
  setNotes: SetNotes;
  info: Info;
}

interface Info {
  firstPage: boolean;
  lastPage: boolean;
  maxPage: number;
}

interface SetNotes {
  (options: Add): void;
  (options: Remove): void;
  (options: Search): void;
  (options: NextPrevPage): void;
}

interface NextPrevPage {
  type: 'NEXT_PAGE' | 'PREVIOUS_PAGE';
}

interface Search {
  type: 'SEARCH';
  payload: string;
}

export type Notes = Note[];

export default useNotes;
