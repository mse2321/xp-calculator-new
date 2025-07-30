export interface IState {
    searchInput?: string
}

export interface IStateReducer {
    state: any,
    dispatch: Function
}

export interface IAction {
    type: string,
    payload?: any
}

