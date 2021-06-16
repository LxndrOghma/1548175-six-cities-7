import { nanoid } from 'nanoid';

const AVATAR_URL = 'https://i.pravatar.cc/128';
const IMAGE_URL = 'https://picsum.photos/260/200';

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: true,
      name: 'Angelina',
    },
    id: nanoid(),
    images: [`${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: `${IMAGE_URL}?random=${Math.random()}`,
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    goods: ['Heating', 'Kitchen', 'Washing machine', 'Coffee machine'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: false,
      name: 'Horus',
    },
    id: nanoid(),
    images: [`${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: `${IMAGE_URL}?random=${Math.random()}`,
    price: 150,
    rating: 3,
    title: 'Excepteur sint occaecat cupidatat non proident',
    type: 'room',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    goods: ['Heating', 'Kitchen', 'Washing machine', 'Coffee machine', 'Lorem', 'Duis'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: true,
      name: 'Sanguinius',
    },
    id: nanoid(),
    images: [`${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: `${IMAGE_URL}?random=${Math.random()}`,
    price: 300,
    rating: 4.5,
    title: 'Ut enim ad minim veniam',
    type: 'room',
  },
  {
    bedrooms: 6,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Nunc id cursus metus aliquam eleifend mi in nulla. Nunc sed id semper risus in',
    goods: ['Heating', 'Kitchen', 'Washing machine', 'Coffee machine', 'Lorem', 'Duis', 'Nulla', 'Morbi'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: nanoid(),
      isPro: false,
      name: 'Perturabo',
    },
    id: nanoid(),
    images: [`${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`, `${IMAGE_URL}?random=${Math.random()}`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: `${IMAGE_URL}?random=${Math.random()}`,
    price: 500,
    rating: 4.9,
    title: 'Egestas purus viverra',
    type: 'Hotel',
  },
];

export default offers;
