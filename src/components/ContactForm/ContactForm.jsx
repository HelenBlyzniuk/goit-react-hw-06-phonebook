import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled.jsx';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    if (e.currentTarget.name === 'name') {
      setName(value);
    }
    if (e.currentTarget.name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    onFormReset();
  };

  const onFormReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          placeholder="...name"
          onChange={handleChange}
          value={name}
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="...number"
          onChange={handleChange}
          value={number}
        />
      </FormLabel>
      <FormButton type="submit" onSubmit={handleSubmit}>
        Add contact
      </FormButton>
    </FormContainer>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
