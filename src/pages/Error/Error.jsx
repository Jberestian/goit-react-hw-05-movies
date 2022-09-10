import { Link, useNavigate } from 'react-router-dom';
import style from '../Error/error.module.css';

const Error = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={style.body}>
      <div className={style.main}>
        <div className={style.links}>
          <button className={style.link} onClick={goBack}>
            Go Back
          </button>
          <Link className={style.link} to="/">
            Home
          </Link>
          <Link className={style.link} to="/search">
            Search
          </Link>
          <Link className={style.link} to="/weekly-trending">
            WeekPage
          </Link>
        </div>
        <h1 className={style.title}>
          4
          <span className={style.span}>
            <span className={style.eye}></span>
            <span className={style.eye}></span>
          </span>
          4
        </h1>
        <h2 className={style.subtitle}>Error: 404 page not found</h2>
        <p className={style.p}>
          Sorry, the page you're looking for cannot be accessed
        </p>
      </div>
    </div>
  );
};

export default Error;
