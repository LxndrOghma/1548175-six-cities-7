import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserMenuSignedIn from '../user-menu-signed-in/user-menu-signed-in';
import UserMenuNotLogged from '../user-menu-not-logged/user-munu-not-logged';
import { AuthorizationStatus } from '../../../const';

function UserMenu({authorizationStatus}) {
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

UserMenu.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {UserMenu};
export default connect(mapStateToProps)(UserMenu);
