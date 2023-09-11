import { configureStore } from '@reduxjs/toolkit';

import language from './language';

const store = configureStore({
  reducer: {
    language,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
