import { useParams } from 'react-router-dom';
import './Thanks.scss';

function Thanks(props) {
  const { recipient } = useParams();

  return <p>Cool Thx, {recipient}</p>;
}

export default Thanks;
