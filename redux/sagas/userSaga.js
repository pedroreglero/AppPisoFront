import { showMessage } from 'react-native-flash-message';
import { goBack, navigateTo } from '../../utilities/RootNavigator';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import ActionConstants from '../reduxConstants';

function RegisterUserSuccess(action) {
    showMessage({
        message: "Usuario registrado correctamente",
        animated: true,
        autoHide: true,
        duration: 1400,
        type: "success"
    });
    setTimeout(() => {
        goBack();
    }, 600)
}

function AuthenticateUserSuccess(action) {
    if (action.payload.token != undefined && action.payload.token != null && action.payload.token != "") {
        navigateTo("Main");
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
    yield takeEvery(ActionConstants.REGISTER_USER_SUCCESS, RegisterUserSuccess);
    yield takeEvery(ActionConstants.REGISTER_USER_ERROR, AuthenticateUserError);
}