import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../const';

function UserMenuNotLogged() {
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.LOGIN }>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">Sign In</span>
      </Link>
    </li>
  );
}

export default UserMenuNotLogged;
