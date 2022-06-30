import './Nav.scss';

const Nav = () => {
  return ( <div className='Nav'>
    <ul className='row'>
      <li className='col'><a href='/'>Home</a></li>
      <li className='col'><a href='#about'>About</a></li>
      <li className='col'><a href='#works'>Works</a></li>
      <li className='col'><a href='#contact'>Contact</a></li>
    </ul>
  </div> );
}

export default Nav;