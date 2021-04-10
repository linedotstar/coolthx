import React, { useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import './Home.css';

function Home(props) {
  const [recipient, setRecipient] = useState('');

  return (
    <>
      <h1>Thank Someone</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label for='recipient-input'>
          Who do you want to thank?
        </label>
        <input
          id='recipient-input'
          type='text'
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder='someone'
        />
      </form>

      <ThanksLink recipient={recipient} />
    </>
  );
}

function ThanksLink(props) {
  const { recipient } = props;

  if (!recipient || recipient.length <= 0) {
    return null;
  }

  const thanksPath = generatePath('/thanks/:recipient', { recipient });
  const thanksUrl = `http://coolthx.com${thanksPath}`;

  return (
    <p>
      {recipient.length > 0 && (
        <Link to={thanksPath}>
          {thanksUrl}
        </Link>
      )}
    </p>
  );
}

export default Home;
