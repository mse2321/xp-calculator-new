import { IAction } from '../interfaces/';

const stateReducer = (state: any, action: IAction) => {
    switch (action.type) {
        case 'set_total_artists':
            return { ...state, totalArtists: action.payload };
        default:
            throw new Error();
    }
};

export default stateReducer;