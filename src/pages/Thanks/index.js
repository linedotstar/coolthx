import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Thanks.scss';

import Page from '@components/Page';

function Thanks(props) {
  let { recipient } = useParams();
  recipient = recipient || props.recipient;

  useEffect(() => {
    document.title = `Cool Thx, ${recipient}`;
  }, [recipient]);

  return (
    <Page name='thanks'>
      <h1 className='thanks'>Cool Thx, {recipient}</h1>
    </Page>
  );
}

export default Thanks;
