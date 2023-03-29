import { combineReducers, createStore } from "redux";
import { currencyReducer } from './currencyReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export type IGlobalState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export type DispatchFunc = () => AppDispatch

const reducers = combineReducers({
    currency: currencyReducer,
});

export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<IGlobalState> = useSelector
export const store = createStore(reducers);