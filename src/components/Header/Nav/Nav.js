import classes from './Nav.module.css';

const Nav = () => {
  return ( <div className={classes.Nav}>
    <ul>
      <li><a href='#home' className={classes.active}>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#resume'>Resume</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
  </div> );
}

export default Nav;