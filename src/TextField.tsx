import React, {useEffect, useState, useRef } from 'react';

interface Person {
    firstName: string;
    lastName?: string;
}

interface Props {
    text: string;
    isTrue?: boolean;
    myNumber?: number;
    person?: Person
    fn: (myName: string) => string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({ handleChange, isTrue, text, myNumber, person, fn }) => {
  // const [ count, setCount ] = useState<number | null | undefined | string>(5);
    const [ count, setCount ] = useState<{ text: string }>({ text: 'hello'});
    const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
      setCount({ text: 'yo!' });
      const myName = fn('Bob');
      console.log(`My name is ${myName}.`);
  },[]);
  return (
    <div>
      <input
          ref={inputRef}
          value={text}
          onChange={handleChange}
      />
    </div>
  );
};
