import React from 'react';

export default function Instructions({ instructions }) {
  const listItems = instructions.map((step) => {
    const parts = step.split(':');
    return (
      <li className='list-decimal ml-7 marker:text-dark-raspberry marker:text-sm marker:font-bold pl-3 leading-7'>
        <p>
          <strong>{parts[0]}:</strong> {parts[1]}
        </p>
      </li>
    );
  });
  return (
    <div className='pb-6 mb-6 border-b-[1px] border-light-grey'>
      <h2 className='--subtitle-style'>Instructions</h2>
      <ol>{listItems}</ol>
    </div>
  );
}
