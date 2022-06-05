import { useState } from 'react';
import { BiError, BiCheckCircle } from 'react-icons/bi';
import { isUsernameValid } from '../helpers';

function UsernameForm() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [invalid, setInvalid] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleUsername = e => {
    const value = e.target.value.toLowerCase();

    if (isUsernameValid(value)) {
      setMessage('Username is valid');
      setInvalid(false);
      setBtnDisabled(false);
    } else {
      setMessage(
        'Your username must be at least 5 characters and can contain lowercase letters, numbers, and the following special characters: -_.',
      );
      setInvalid(true);
      setBtnDisabled(true);
    }
    setUsername(value);
  };

  const formatInput = e => {
    setUsername(e.target.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage('Your data was submitted successfully');
    setUsername('');
    setBtnDisabled(true);
  };
  return (
    <form action='#' onSubmit={handleSubmit}>
      <h2>Username Validation Demo</h2>
      <div className='form-group'>
        <label htmlFor='username'>
          Username
          <i className='visible-hidden'>required</i>
        </label>
        <input
          type='text'
          name='username'
          id='username'
          spellCheck='false'
          className='username-input'
          aria-describedby='username-message'
          aria-invalid={invalid}
          value={username}
          onChange={handleUsername}
          onBlur={formatInput}
        />
        {message && (
          <p
            className='feedback-message'
            style={{ color: invalid ? '#dd0e0e' : '#068404' }}
            aria-required='true'
            id='username-message'
            aria-live='polite'
          >
            {invalid ? (
              <BiError size='1.1rem' />
            ) : (
              <BiCheckCircle size='1.1rem' />
            )}{' '}
            <span>{message}</span>
          </p>
        )}
      </div>
      <button
        type='submit'
        className='btn'
        disabled={btnDisabled}
        aria-label={invalid ? 'Button is disabled' : 'Send'}
      >
        Send
      </button>
    </form>
  );
}

export default UsernameForm;
