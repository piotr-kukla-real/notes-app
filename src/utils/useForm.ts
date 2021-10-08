import { useState } from 'react';

interface initValues {
  [key: string]: string;
}

type useForm = <T extends initValues>(
  initValues: T,
) => {
  values: T;
  handleChange: handleChange;
};

type handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

const useForm: useForm = (initValues) => {
  const [values, setValues] = useState(initValues);
  const handleChange: handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return { values, handleChange };
};

export default useForm;
