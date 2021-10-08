import useForm from 'utils/useForm';
import { StyledForm, FormControl, SubmitBtn } from './AddNoteFormElements';

const titleMaxLength: number = 50;
const noteMaxLength: number = 1000;

const AddNoteForm: React.FC = () => {
  const { values, handleChange } = useForm({ title: '', note: '' });

  return (
    <StyledForm>
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
        name="note"
        value={values.note}
        onChange={handleChange}
        inputProps={{ maxLength: noteMaxLength }}
        helperText={`${values.note.length}/${noteMaxLength}`}
      />
      <SubmitBtn variant="outlined" type="submit">
        Add note
      </SubmitBtn>
    </StyledForm>
  );
};

export default AddNoteForm;
