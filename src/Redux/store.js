import { configureStore } from '@reduxjs/toolkit';
import contactReduser from './contacts/contact-reduser';

const store = configureStore({
   reducer: {
      contact: contactReduser,
   },
   devTools: process.env.NODE_ENV === 'development',
});

export default store;
