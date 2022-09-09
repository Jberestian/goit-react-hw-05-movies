import { Link, useNavigate } from 'react-router-dom';
import style from '../Error/error.module.css';

const Error = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return <></>;
};

export default Error;
