import { NameSpace } from '../root-reducer';

const getCity = (state) => state[NameSpace.UI].city;
const getSortType = (state) => state[NameSpace.UI].sortType;

export {
  getCity,
  getSortType
};

