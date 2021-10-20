import useNotes from 'components/NotesProvider';
import { DebounceInput } from 'react-debounce-input';
import { StyledInput } from './SearchElements';

const Search: React.FC = () => {
  const { setNotes } = useNotes()!;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setNotes({ type: 'SEARCH', payload: e.target.value });

  return (
    <DebounceInput
      onChange={onChange}
      element={StyledInput}
      label="search"
      type="search"
      debounceTimeout={150}
    />
  );
};

export default Search;
