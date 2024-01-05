import React, {Component} from 'react';
import Search from './Search/search.js';


class Header extends Component {
  render() {
    return (
      <header className='header clearfix'>
  
       <Search />
       <h1><center>Login</center></h1>
      </header>
    )
  }
}

export default Header;
