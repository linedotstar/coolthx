import React, { useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import './Home.css';

function Home(props) {
  const [recipient, setRecipient] = useState('someone');
  const thanksPath = generatePath('/thanks/:recipient', { recipient });
  const thanksUrl = `http://coolthx.com${thanksPath}`;

  return (
    <>
      <h1>Thank Someone</h1>
      <form>
        <label>Who do you want to thank?</label>
        <input
          type='text'
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </form>

      <p>
        {recipient.length > 0 && (
          <Link to={thanksPath}>
            {thanksUrl}
          </Link>
        )}
      </p>
    </>
  );
}

export default Home;
