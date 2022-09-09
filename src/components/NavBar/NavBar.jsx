import style from './navBar.module.css';
import NavBarMenu from './NavBarMenu/NavBarMenu';

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <NavBarMenu />
    </nav>
  );
};

export default NavBar;
