import NavBar from 'components/NavBar/NavBar';
import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
