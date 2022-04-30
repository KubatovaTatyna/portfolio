import classes from './Header.module.css';
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <>
      <div className={classes.Header} id='home'>
        <Nav />
        <div className={classes.HeaderText}>
          <h1>Tatyna Kubatova</h1>
          <h2>Frontend Developer</h2>
        </div>
      </div>
    </>);
}

export default Header;