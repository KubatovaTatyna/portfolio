import './Header.scss';
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <>
      <div className='Header' id='home'>
        <Nav />
        <div className='HeaderText row m-auto d-flex align-items-center'>
          <h1 className='col-12'>Tatyna Kubatova</h1>
          <h2 className='col-12'>Frontend Developer</h2>
        </div>
      </div>
    </>);
}

export default Header;