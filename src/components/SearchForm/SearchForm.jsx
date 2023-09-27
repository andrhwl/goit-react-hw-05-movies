import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormButton, StyledForm, StyledInput } from './SearchFormstyled';

export default function SearchForm({ formSubmit, errorMessage }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      errorMessage();
      return;
    }

    formSubmit(query);
    setQuery('');
  };

  const handleInput = e => {
    setQuery(e.target.value.toLowerCase().trim());
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <FormButton type="submit">Search</FormButton>
        <StyledInput
          type="text"
          name="query"
          autoFocus
          value={query}
          onChange={handleInput}
          autoComplete="off"
          placeholder="find a movie"
        />
      </StyledForm>
    </>
  );
}

SearchForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.func.isRequired,
};
