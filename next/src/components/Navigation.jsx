import React from 'react';
import Link from 'gatsby-link';
import logo from '../images/logo-green-white-trans.png';
import MenuIcon from '../images/icons/Scelto–icon-menu.svg';
import CloseMenu from '../images/icons/Scelto–icon-close-hover.svg';
import './Navigation.less';

class Navigation extends React.Component {
  constructor (props) {
    super (props);
    this.state = {open: false};
    this.toggleMenu = this.toggleMenu.bind (this);
  }

  toggleMenu (force) {
    this.setState ({open: force !== undefined ? force : !this.state.open});
    console.log (!this.state.open);
  }

  render () {
    const menuItems = [
      {href: '/lonnskalkulator', title: 'Hvorfor jobbe i Scelto?'},
      {href: '/ansatte', title: 'Menneskene'},
      {href: '/tjenester', title: 'Tjenester'},
      {href: '/kontakt', title: 'Kontakt'},
    ];

    return (
      <div id="index-banner">
        <nav className="navigation" role="navigation">

          {this.state.open &&
            <div className="dropdown-menu">
              <div className="dropdown-menu__bar">
                <Link
                  onClick={() => {
                    this.toggleMenu (false);
                  }}
                  to="/"
                  className="logo"
                >
                  <img src={logo} alt="Logo for Scelto" />
                </Link>

                <div className="">
                  <button
                    id="mobile-menu-open"
                    onClick={() => {
                      this.toggleMenu ();
                    }}
                  >
                    <img src={CloseMenu} width="50px" alt={`Lukk meny`} />
                  </button>
                </div>
              </div>
              <ul className="dropdown-menu__menu-items">
                {menuItems.map (item => (
                  <li>
                    <Link
                      onClick={() => {
                        this.toggleMenu (false);
                      }}
                      to={item.href}
                      activeStyle={{
                        backgroundColor: '#C5D200',
                        borderBottom: 'none',
                        color: 'black',
                      }}
                    >
                      <span className="sc-link">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>}
          <div className="hide-on-med-and-down">
            <Link id="logo-container" to="/" className="logo">
              <img src={logo} alt="Logo for Scelto" />
            </Link>
            <ul className="right">
              {menuItems.map (item => (
                <li>
                  <Link
                    onClick={() => {
                      this.toggleMenu (false);
                    }}
                    to={item.href}
                    activeStyle={{
                      backgroundColor: '#C5D200',
                      padding: '0 10px',
                      borderBottom: 'none',
                      color: 'black',
                    }}
                    style={{
                      padding: '0 10px',
                      borderBottom: '2px solid #C5D200',
                      color: '#C5D200',
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {!this.state.open &&
            <div className="hide-on-large-only">
              <Link
                onClick={() => {
                  this.toggleMenu ();
                }}
                to="/"
                className="logo"
              >
                <img src={logo} alt="Logo for Scelto" />
              </Link>

              <div className="">
                <button
                  id="mobile-menu-open"
                  onClick={() => {
                    this.toggleMenu ();
                  }}
                  alt="Åpne meny"
                >
                  <img src={MenuIcon} width="50px" alt="Åpne meny" />
                </button>
              </div>
            </div>}
        </nav>
      </div>
    );
  }
}

export default Navigation;
