import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../const';
import { logout } from '../../../store/api-actions';
import { getUserAvatarUrl, getUserEmail } from '../../../store/user/selectors';

function UserMenuSignedIn() {
  const userEmail = useSelector(getUserEmail);
  const avatarUrl = useSelector(getUserAvatarUrl);

  const dispatch = useDispatch();

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.FAVORITES } data-testid='header__nav-link--profile'>
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={avatarUrl} alt="User avatar" style={{borderRadius: '50%'}}/>
          </div>
          <span className="header__user-name user__name">{userEmail}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logout());
          }}
          to={ AppRoute.MAIN }
        >
          <span className="header__login">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default UserMenuSignedIn;
