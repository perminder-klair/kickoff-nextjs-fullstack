import { createStore } from 'easy-peasy';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import schema from './schema';
import config from '../utils/config';

export function initializeStore() {
  const store = createStore(schema, {
    name: config.projectKey,
    devTools: true,
    reducerEnhancer: (reducer) =>
      persistReducer(
        {
          key: config.projectKey,
          storage,
        },
        reducer,
      ),
  });

  // eslint-disable-next-line no-unused-vars
  const persistor = persistStore(store);

  return store;
}
