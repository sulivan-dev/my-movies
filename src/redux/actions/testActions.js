import type from './type';

export const updateDate = () => {
  return {
    type: type.UPDATE_DATE,
    payload: new Date(),
  }
}
