"use client"
import React, { useContext, createContext, useReducer } from "react";
import stateReducer from '../reducer/reducer';
import { IState, IStateReducer } from '../interfaces/';

const StateContext = createContext<IStateReducer>({} as IStateReducer);

const useStateContext = () => useContext(StateContext);

const StateProvider = ({ children }: any) => {

    const initialState: IState = {
        searchInput: '',
    }

    const [state, dispatch] = useReducer(stateReducer, initialState);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            { children }
        </StateContext.Provider>
    )
};

export { StateProvider, useStateContext, StateContext };