import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../header/page-header/page-header';
import ReviewsSection from '../../reviews/reviews-section/reviews-section';
import offersProp from '../../props/offers.prop';
import Map from '../../map/map';
import OffersList from '../../offers/offers-list/offers-list';
import { OffersListType } from '../../../const';
import PremiumMark from '../../property/premium-mark/premium-mark';
import ImagesList from '../../property/images-list/images-list';
import { getWordWithCapitalLetter } from '../../../utils';
import GoodsList from '../../property/goods-list/goods-list';
import { fetchCurrentOffer, fetchNearbyOffers } from '../../../store/api-actions';
import LoadWrapper from '../../loading/load-wrapper/load-wrapper';
import PropertyHost from '../../property/property-host/property-host';

function Room({nearbyOffers, currentOffer, isCurrentOfferLoaded}) {
  const [activeCard, setActiveCard] = useState(NaN);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentOffer(id));
    dispatch(fetchNearbyOffers(id));
  }, [id, dispatch]);

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
    host,
  } = currentOffer;

  return (
    <div className="page">
      <Header />

      <LoadWrapper isDataLoaded={isCurrentOfferLoaded}>
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
                  <button className="property__bookmark-button button" type="button">
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
                    {type && getWordWithCapitalLetter(type)}
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
                {goods && <GoodsList goods={goods} />}
                {host && <PropertyHost host={host} description={description} />}
                <ReviewsSection />
              </div>
            </div>
            <section className="property__map map">
              <Map
                offers={nearbyOffers}
                activeCard={activeCard}
              />
            </section>
          </section>
          <div className="container">
            <OffersList
              offers={nearbyOffers}
              setActiveCard={setActiveCard}
              pageType={OffersListType.ROOM_PAGE}
            />
          </div>
        </main>
      </LoadWrapper>
    </div>
  );
}

Room.propTypes = {
  nearbyOffers: PropTypes.arrayOf(offersProp).isRequired,
  currentOffer: offersProp,
  isCurrentOfferLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isCurrentOfferLoaded: state.isCurrentOfferLoaded,
  currentOffer: state.currentOffer,
  nearbyOffers: state.nearbyOffers,
});

export { Room };
export default connect(mapStateToProps)(Room);

