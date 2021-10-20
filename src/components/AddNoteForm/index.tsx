import useNotes from 'components/NotesProvider';
import useNotify from 'components/NotificationProvider';
import useForm from 'utils/useForm';
import { StyledForm, FormControl, SubmitBtn } from './AddNoteFormElements';

const titleMaxLength: number = 50;
const noteMaxLength: number = 1000;

const AddNoteForm: React.FC = () => {
  const { setNotes } = useNotes()!;
  const setNotify = useNotify()!;

  const { values, handleChange, reset } = useForm({ title: '', text: '' });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, text } = values;

    if (!title || !text) {
      setNotify({
        message: 'Please fill every field',
        color: 'error',
        icon: 'error',
      });
      return;
    }

    setNotes({
      type: 'ADD',
      payload: { title, text },
    });
    reset();
    setNotify({
      message: 'Note added',
      color: 'dark',
      icon: 'check',
    });
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormControl
        label="title"
        name="title"
        value={values.title}
        onChange={handleChange}
        inputProps={{ maxLength: titleMaxLength }}
      />
      <FormControl
        label="note"
        multiline
        rows="8"
        name="text"
        value={values.text}
        onChange={handleChange}
        inputProps={{ maxLength: noteMaxLength }}
        helperText={`${values.text.length}/${noteMaxLength}`}
      />
      <SubmitBtn variant="outlined" type="submit">
        Add note
      </SubmitBtn>
    </StyledForm>
  );
};

export default AddNoteForm;
