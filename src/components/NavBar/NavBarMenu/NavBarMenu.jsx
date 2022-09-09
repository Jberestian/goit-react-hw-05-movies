import { NavLink } from 'react-router-dom';

import NavBarMenuItems from './NavBarMenuItems';
import style from './navBarMenu.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? `${style.link} ${style.active}` : style.link;
};

const NavBarMenu = () => {
  const navLinks = NavBarMenuItems.map(({ to, text }, idx) => (
    <li key={idx} className={style.item}>
      <NavLink className={getClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={style.list}>{navLinks}</ul>;
};

export default NavBarMenu;
