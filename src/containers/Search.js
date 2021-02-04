import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Search() {
  const [text, setText] = useState('');
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (text) {
      history.push(`/`);
      history.push(`?text=${text}`);
    } else history.push(`/`);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  // useEffect(() => {
  //     delay();
  // }, [text]);

  // function delay() {
  //     setTimeout(() => {
  //         if (text) history.push(`?text=${text}`);
  //     }, 500);
  // }

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit" className="fa fa-search"></button>
    </form>
  );
}

export default Search;
