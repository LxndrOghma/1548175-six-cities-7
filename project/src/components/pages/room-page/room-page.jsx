import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PageHeader from '../../header/page-header/page-header';
import ReviewsSection from '../../reviews/reviews-section/reviews-section';
import Map from '../../map/map';
import OffersList from '../../offers/offers-list/offers-list';
import { FavoriteButtonType, OffersListType } from '../../../const';
import PremiumMark from '../../property/premium-mark/premium-mark';
import ImagesList from '../../property/images-list/images-list';
import { getWordWithCapitalLetter } from '../../../utils';
import GoodsList from '../../property/goods-list/goods-list';
import { fetchComments, fetchCurrentOffer, fetchNearbyOffers } from '../../../store/api-actions';
import LoadWrapper from '../../loading/load-wrapper/load-wrapper';
import PropertyHost from '../../property/property-host/property-host';
import { getCurrentOffer, getIsCurrentOfferLoaded, getNearbyOffers, getReviews } from '../../../store/data/selectors';
import FavoriteButton from '../../favorites/favorite-button/favorite-button';

function RoomPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const nearbyOffers = useSelector(getNearbyOffers);
  const currentOffer = useSelector(getCurrentOffer);
  const isCurrentOfferLoaded = useSelector(getIsCurrentOfferLoaded);

  const offersForMap = [currentOffer, ...nearbyOffers];
  const reviews = useSelector(getReviews).slice().sort((first, second) => new Date(second.date) - new Date(first.date));

  useEffect(() => {
    dispatch(fetchCurrentOffer(id));
    dispatch(fetchNearbyOffers(id));
    dispatch(fetchComments(id));
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
      <PageHeader />

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
                  <FavoriteButton offer={currentOffer} buttonSettings={FavoriteButtonType.ROOM_PAGE} />
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
                <ReviewsSection id={id} reviews={reviews}/>
              </div>
            </div>
            <section className="property__map map">
              <Map
                offers={offersForMap}
                activeCard={currentOffer.id}
              />
            </section>
          </section>
          <div className="container">
            <OffersList
              offers={nearbyOffers}
              pageType={OffersListType.ROOM_PAGE}
            />
          </div>
        </main>
      </LoadWrapper>
    </div>
  );
}

export default RoomPage;

