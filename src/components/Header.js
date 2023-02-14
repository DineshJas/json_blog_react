import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from 'store';

class Header extends Component {

    logOut = () =>{
        this.props.history.push('/login')
        store.clearAll()
    }

    render() { 
        return ( 
            <nav className='nav-bar navbar-light bg-light d-flex'>
                <Link className='mr-auto' to='/home'>
                <img src='https://dns.winkl.co/Indicator_icons/blog/blog_logo_black.png'
                 className='navbar-brand' 
                 width='100' 
                 height='50' 
                 alt='logo'/>
                </Link>
                <Link className='nav-link' to='/post'>Post</Link>
                <Link className='nav-link' to='/author'>Authors</Link>
                
                <button type="button" onClick={()=>this.logOut()} className="btn btn-link btn-login">
                    <i className="fas fa-sign-out-alt"/>  Logout
                </button>
            </nav>
         );
    }
}
 
export default Header;