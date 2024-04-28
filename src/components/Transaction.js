


import React, { useState } from 'react';

const Transaction = ({ transactions }) => {
  const [message, setMessage] = useState('');

 
  if (!transactions || transactions.length === 0) {
    return <div>No transactions to display</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Submitted message:', message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      
      <div>{message}</div>
    </div>
  );
};

export default Transaction;
