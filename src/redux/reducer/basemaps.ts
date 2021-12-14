
interface InitialState {
    basemaps: {
        url: string;
        title: string[];
        visible: boolean;
    }[]
}
const initialState: InitialState = {
    basemaps: []
}
interface DefaultAction {
    type: string;
    payload?: any;
}
export const basemapsReducer = (state = initialState, action: DefaultAction): InitialState => {
    if (action.type === 'SET_BASEMAPS') {
        return {
            ...state,
            basemaps: action.payload,
        }
    }
    if (action.type === 'CHANGE_WMS_LAYER_VISIBILITY') {
        const { index, visible } = action.payload as { index: number, visible: boolean };
        const item = state.basemaps[index];
        if(!item) {
            return state;
        }
        state.basemaps[index] = {
            ...item,
            visible
        }
        return {
            ...state,
            basemaps: [...state.basemaps]
        }
    }
    return state;
}