import { useParams } from 'react-router-dom';
import './Thanks.scss';

function Thanks(props) {
  const { recipient } = useParams();

  return <h1 className='thanks'>Cool Thx, {recipient}</h1>;
}

export default Thanks;
