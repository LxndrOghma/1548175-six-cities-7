import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../../header/page-header/page-header';
import ReviewsSection from '../../reviews/reviews-section/reviews-section';
import reviewsProp from '../../props/reviews.prop';
import offersProp from '../../props/offers.prop';
import Map from '../../map/map';
import OffersList from '../../offers/offers-list/offers-list';
import { OffersListType } from '../../../const';
import { connect } from 'react-redux';

function Room({reviews, nearestOffers}) {
  const [activeCard, setActiveCard] = useState('');

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Studio" />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                    Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                    Apartment
                </li>
                <li className="property__feature property__feature--bedrooms">
                    3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">
                      Wi-Fi
                  </li>
                  <li className="property__inside-item">
                      Washing machine
                  </li>
                  <li className="property__inside-item">
                      Towels
                  </li>
                  <li className="property__inside-item">
                      Heating
                  </li>
                  <li className="property__inside-item">
                      Coffee machine
                  </li>
                  <li className="property__inside-item">
                      Baby seat
                  </li>
                  <li className="property__inside-item">
                      Kitchen
                  </li>
                  <li className="property__inside-item">
                      Dishwasher
                  </li>
                  <li className="property__inside-item">
                      Cabel TV
                  </li>
                  <li className="property__inside-item">
                      Fridge
                  </li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                      Angelina
                  </span>
                  <span className="property__user-status">
                      Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
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
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  nearestOffers: state.nearestOffers,
});

export { Room };
export default connect(mapStateToProps)(Room);

