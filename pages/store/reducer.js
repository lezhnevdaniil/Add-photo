//import initialState from './initialState'
export const reducer = (state, action) => {
  switch (action.type) {
    case 'addImage':
      return { images: [...state.images, action.payload] };
    case 'deleteImages':
      return { images: [] };

    default:
      return state;
  }
};
