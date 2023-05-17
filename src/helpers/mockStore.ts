import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Store } from 'store';

export const mockStore = configureMockStore<Store, any>([thunk]);
