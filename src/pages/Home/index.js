import React, { useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import copy from 'copy-to-clipboard';
import './Home.scss';

import Page from '@components/Page';
import Form from '@components/Form';

function Home(props) {
  const [recipient, setRecipient] = useState('');

  return (
    <Page name='home'>
      <h1>Thank Someone</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group>
          <Form.Input
            id='recipient-input'
            label='Who do you want to thank?'
            type='text'
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </Form.Group>
      </Form>

      <ThanksLink recipient={recipient} />
    </Page>
  );
}

function ThanksLink(props) {
  const { recipient } = props;
  const [copied, setCopied] = useState(false);

  if (!recipient || recipient.length <= 0) {
    return null;
  }

  const thanksPath = generatePath('/thanks/:recipient', { recipient });
  const thanksUrl = `http://coolthx.com${thanksPath}`;

  const copyLink = () => {
    setCopied(copy(thanksUrl));
  };

  return (
    <p>
      <Link to={thanksPath}>
        {thanksUrl}
      </Link>
      <button onClick={copyLink}>copy{copied && '!!!'}</button>
    </p>
  );
}

export default Home;
