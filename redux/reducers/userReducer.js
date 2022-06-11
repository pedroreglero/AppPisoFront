import ActionConstants from '../reduxConstants';



const defaultState = {
    usuario: null,
    token: null
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionConstants.AUTHENTICATE_USER_SUCCESS:
            {
                if (action.payload.token != undefined && action.payload.token != null && action.payload.token != "") {
                    state = { ...state, usuario: action.payload.usuario, token: action.payload.token,  };
                }
                return state;
            }
        case ActionConstants.AUTHENTICATE_USER_ERROR:
            {
                return { ...state, error: action.payload.error };
            }
        default:
            return state;
    }
}

