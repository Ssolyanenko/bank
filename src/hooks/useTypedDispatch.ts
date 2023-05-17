import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';

import { reducers } from 'store';

export type ReduxState = ReturnType<typeof reducers>;
export type TypedDispatch = ThunkDispatch<ReduxState, null, AnyAction>;
export const useTypedDispatch = (): TypedDispatch => useDispatch<TypedDispatch>();
