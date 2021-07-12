import { NameSpace } from '../root-reducer';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getUserAvatarUrl = (state) => state[NameSpace.USER].user.avatarUrl;
const getUserEmail = (state) => state[NameSpace.USER].user.email;
const getUserId = (state) => state[NameSpace.USER].user.id;
const getUserIsPro = (state) => state[NameSpace.USER].user.isPro;
const getUserName = (state) => state[NameSpace.USER].user.name;

export {
  getAuthorizationStatus,
  getUserAvatarUrl,
  getUserEmail,
  getUserId,
  getUserIsPro,
  getUserName
};

