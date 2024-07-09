import { NavLink } from 'react-router-dom';
import './styles.css';

const navLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Watch List',
    link: '/watch-list',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'About',
    link: '/about',
  },
];

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left-container">
        <h3>TheMovieDB App</h3>
      </div>
      <div className="navbar-right-container">
        <ul className="links-container">
          {navLinks.map((item) => (
            <li key={item.link}>
              <NavLink
                to={item.link}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
