import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import UserMenu from '../user-menu/user-menu';

function PageHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={ AppRoute.MAIN } data-testid='header__logo-link'>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
