import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import PageHeader from '../../header/page-header/page-header';

const notFoundPagePageHeaderStyle = {
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
      <PageHeader />
      <h1 style = { notFoundPagePageHeaderStyle }>404 Not Found</h1>
      <Link style = { notFoundPageLinkStyle } to={ AppRoute.MAIN}>Back to main page</Link>
    </>
  );
}

export default NotFoundPage;
