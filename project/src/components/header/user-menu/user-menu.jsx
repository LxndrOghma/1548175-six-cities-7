import React from 'react';
import { useSelector } from 'react-redux';

import UserMenuSignedIn from '../user-menu-signed-in/user-menu-signed-in';
import UserMenuNotLogged from '../user-menu-not-logged/user-munu-not-logged';
import { AuthorizationStatus } from '../../../const';
import { getAuthorizationStatus } from '../../../store/user/selectors';

function UserMenu() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          authorizationStatus === AuthorizationStatus.AUTH
            ? <UserMenuSignedIn />
            : <UserMenuNotLogged />
        }
      </ul>
    </nav>
  );
}

export default UserMenu;
