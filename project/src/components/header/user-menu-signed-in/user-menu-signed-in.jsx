import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute } from '../../../const';
import { logout } from '../../../store/api-actions';

function UserMenuSignedIn({logoutAccount, userEmail, avatarUrl}) {
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.FAVORITES }>
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
            logoutAccount();
          }}
          to={ AppRoute.MAIN }
        >
          <span className="header__login">Sign out</span>
        </Link>
      </li>
    </>
  );
}

UserMenuSignedIn.propTypes = {
  logoutAccount: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  avatarUrl: state.user.avatarUrl,
});

const mapDispatchToProps = (dispatch) => ({
  logoutAccount() {
    dispatch(logout());
  },
});

export {UserMenuSignedIn};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenuSignedIn);
