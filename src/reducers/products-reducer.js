export default function productsReducer(state = '', { type, payload }) {
  switch (type) {
    case 'updateUser':
      return payload;
    default:
      return state;
  }
}
