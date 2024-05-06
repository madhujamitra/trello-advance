import React, { useRef } from 'react';

const UncontrolledComponent: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null); // Define inputRef as a reference to an input element

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) { // Ensure inputRef.current is not null
      console.log('Input value:', inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledComponent;
