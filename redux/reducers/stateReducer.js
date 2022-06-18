import ActionConstants from "../reduxConstants";

const defaultState = {
    areTabbarActionsShown: false
}

export default function stateReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionConstants.SHOW_TABBAR_ADD:
            {
                return { ...state, areTabbarActionsShown: true };
            }
        case ActionConstants.HIDE_TABBAR_ADD:
            {
                return { ...state, areTabbarActionsShown: false };
            }
        case ActionConstants.TOGGLE_TABBAR_ADD:
            {
                return { ...state, areTabbarActionsShown: !state.areTabbarActionsShown };
            }
        default:
            return state;
    }
}