const AVATAR_URL = 'https://i.pravatar.cc/128';


const reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam erat velit scelerisque in dictum. Orci porta non pulvinar neque laoreet.',
    date: '2020-05-08T14:40:56.569Z',
    id: 2,
    rating: 2,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: 'Jaghatai Khan',
    },
  },
  {
    comment: 'Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Orci porta non pulvinar neque laoreet suspendisse interdum. Proin sagittis nisl rhoncus mattis.',
    date: '2021-06-08T12:40:56.569Z',
    id: 3,
    rating: 2,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Ferrus Manus',
    },
  },
  {
    comment: 'Commodo ullamcorper a lacus vestibulum sed arcu non odio. Magna eget est lorem ipsum dolor sit amet consectetur. Mi bibendum neque egestas congue. Non consectetur a erat nam at lectus urna duis. Suscipit tellus mauris a diam maecenas sed.',
    date: '2021-01-21T19:21:33.569Z',
    id: 4,
    rating: 4.3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: 'Vulkan',
    },
  },
];

export default reviews;
