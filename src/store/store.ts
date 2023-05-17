import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { composeWithDevTools } from '@redux-devtools/extension';
import { getPersistConfig } from 'redux-deep-persist';
import thunk from 'redux-thunk';

import { createNoopStorage } from 'helpers/createNoopStorage';
import { userData } from 'store/user/user.reducer';
import { cityData } from 'store/city/city.reducer';
import { branchData } from 'store/branches/branch.reducer';
import { cardsData } from 'store/cards/cards.reducer';
import { transactionsData } from 'store/transactions/transactions.reducer';

const userPersistConfig = getPersistConfig({
  key: 'userLogin',
  whitelist: ['userLogin.isAuth', 'userLogin.token'],
  storage: typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage(),
  rootReducer: userData,
});

export const reducers = combineReducers({
  userData: persistReducer(userPersistConfig, userData),
  cityData,
  branchData,
  cardsData,
  transactionsData,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export type Store = ReturnType<typeof reducers>;
