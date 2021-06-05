import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import Header from '../../header/page-header/page-header';

const notFoundPageHeaderStyle = {
  marginTop: '0',
  marginBottom: '7px',
  padding: '0 28px',
  fontSize: '38px',
  lineHeight: '1.21053',
  fontWeight: '700',
  fontStyle: 'oblique',
  textAlign: 'center',
};

const notFoundPageLinkStyle = {
  display: 'block',
  fontSize: '20px',
  fontWeight: '400',
  textDecoration: 'underline',
  textAlign: 'center',
};

function NotFoundPage() {
  return (
    <>
      <Header />
      <h1 style = { notFoundPageHeaderStyle }>404 Not Found</h1>
      <Link style = { notFoundPageLinkStyle } to={ AppRoute.MAIN}>Back to main page</Link>
    </>
  );
}

export default NotFoundPage;
