import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { clearUsers, searchUsers, users } = githubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const clearButton = (
    <button className="btn btn-light btn-block" onClick={clearUsers}>
      Clear
    </button>
  );

  const showClear = users.length > 0;

  return (
    <div>
      <form onSubmit={onSubmit} action="" className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && clearButton}
    </div>
  );
};

export default Search;
