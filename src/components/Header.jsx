import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import Search from './Search';

import logoSvg from '../assets/img/pizza-logo.svg';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <Link to='/'>
          <div className='header__logo'>
            <img width='38' src={logoSvg} alt='Pizza logo' />
            <div>
              <h1>Edward's Pizza</h1>
              <p>the most delicious pizza in the universe</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className='header__cart'>
          <Link to='/cart' className='button button--cart'>
            <span>520 uah</span>
            <div className='button__delimiter'></div>
            <Icon name='arrow down cart' size='large' inverted />
            <span>3</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
