import { useState } from "react";

export const useForm = (submitCallback) => {
  const [state, setState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallback();
  };

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return [state, handleChange, handleSubmit];
};
