import React from 'react';
import UserMenuSignedOut from '../user-menu-signed-out/user-menu-signed-out';

function PageHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <UserMenuSignedOut />
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
