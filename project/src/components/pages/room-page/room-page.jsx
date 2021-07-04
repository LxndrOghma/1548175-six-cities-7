import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../header/page-header/page-header';
import ReviewsSection from '../../reviews/reviews-section/reviews-section';
import reviewsProp from '../../props/reviews.prop';
import offersProp from '../../props/offers.prop';
import Map from '../../map/map';
import OffersList from '../../offers/offers-list/offers-list';
import { OffersListType } from '../../../const';
import PremiumMark from '../../property/premium-mark/premium-mark';
import ImagesList from '../../property/images-list/images-list';
import { getWordWithCapitalLetter } from '../../../utils';
import GoodsList from '../../property/goods-list/goods-list';
import ProMark from '../../property/pro-mark/pro-mark';

function Room({reviews, nearestOffers, offers}) {
  const [activeCard, setActiveCard] = useState('');
  const { id } = useParams();

  const currentOffer = offers.find((offer) => offer.id === +id);

  const {
    title,
    isPremium,
    images,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    description,
    host: {
      avatarUrl,
      isPro,
      name,
    },
  } = currentOffer;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <ImagesList images={images}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PremiumMark />}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button" focused>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${ rating * 20 }%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {getWordWithCapitalLetter(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {
                    bedrooms +
                    (bedrooms === 1
                      ? ' bedroom'
                      : ' bedrooms')
                  }
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} ${maxAdults === 1 ? 'adult' : 'adults'}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {
                goods.length > 1 && <GoodsList goods={goods}/>
              }
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro && <ProMark />}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsSection reviews={reviews}/>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={nearestOffers}
              activeCard={activeCard}
            />
          </section>
        </section>
        <div className="container">
          <OffersList
            offers={nearestOffers}
            setActiveCard={setActiveCard}
            pageType={OffersListType.ROOM_PAGE}
          />
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
  nearestOffers: PropTypes.arrayOf(offersProp).isRequired,
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
  nearestOffers: state.nearestOffers,
});

export { Room };
export default connect(mapStateToProps)(Room);

