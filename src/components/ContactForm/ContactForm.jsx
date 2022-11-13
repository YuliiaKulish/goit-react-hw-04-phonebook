import PropTypes from 'prop-types';
import { useState } from 'react';

import { nanoid } from 'nanoid';
import { Form } from 'components/ContactForm/ContactForm.styled';

export function ContactForm({ onContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onContact({ name, number });
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nanoid()}>Name</label>
        <input
          id={nanoid()}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <div>
        <label htmlFor={nanoid()}>Number</label>
        <input
          id={nanoid()}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>

      <button type="submit">Add contact</button>
    </Form>
  );
}

ContactForm.propTypes = {
  onContact: PropTypes.func.isRequired,
};
