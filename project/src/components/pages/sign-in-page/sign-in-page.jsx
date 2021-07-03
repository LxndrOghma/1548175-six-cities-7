import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute } from '../../../const';
import Header from '../../header/page-header/page-header';
import { login } from '../../../store/api-actions';
import { connect } from 'react-redux';
import { validateEmail } from '../../../utils';

function SignIn({onSubmit}) {
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleEmailInput = (evt) => {
    !validateEmail(evt.target.value)
      ? evt.target.setCustomValidity('Email введён не верно')
      : evt.target.setCustomValidity('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onInput={handleEmailInput}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={ AppRoute.MAIN }>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
