import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValues(e) {
    const { value } = e.target;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  }

  return { values, updateValues };
}
