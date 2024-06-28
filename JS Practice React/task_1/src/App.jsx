import React, { useRef } from 'react';

function MyForm() {
  const inputRef = useRef(null);

  function handleSubmit(e){
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = ""
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="myInput">My Input:</label>
      <input type="text" id="myInput" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;