import { action } from 'easy-peasy';

const schema = {
  isLoggedIn: {
    value: false,
    toggle: action((state, payload) => {
      state.value = payload;
    }),
  },
};

export default schema;
