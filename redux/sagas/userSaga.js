import { showMessage } from 'react-native-flash-message';
import { navigateTo } from '../../utilities/RootNavigator';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import ActionConstants from '../reduxConstants';


function AuthenticateUserSuccess(action) {
    if (action.payload.token != undefined && action.payload.token != null && action.payload.token != "") {

        navigateTo("Main");
        showMessage({
            message: "Bienvenido",
            description: `Bienvenido a la app ${action.payload.usuario.name ?? ""}`,
            animated: true,
            autoHide: true,
            duration: 2000,
            type: "success",
            position: "bottom"
        });
    }
    else {
        showMessage({
            message: "Usuario o contraseña incorrectos",
            description: "Por favor, verifique que los datos ingresados sean correctos",
            animated: true,
            autoHide: true,
            duration: 2000,
            type: "danger"
        });
    }
}

function AuthenticateUserError(action) {
    showMessage({
        message: "Error",
        description: action.payload.error,
        animated: true,
        autoHide: true,
        duration: 2000,
        type: "danger"
    });
}


export function* usersSaga() {
    yield takeEvery(ActionConstants.AUTHENTICATE_USER_SUCCESS, AuthenticateUserSuccess);
    yield takeEvery(ActionConstants.AUTHENTICATE_USER_ERROR, AuthenticateUserError);
}