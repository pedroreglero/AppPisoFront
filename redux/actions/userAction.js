import axios from "axios";
import Constantes from "../../utilities/Constantes";
import ActionConstants from "../reduxConstants";


export const autenticarUsuario = (user, pass) => async (dispatch, getState) => {
    try {
        const res = await axios.post(Constantes.DireccionServidor + "/api/User/Login", {username: user, hashedPassword: pass});
        console.log("res: " + JSON.stringify(res.data));

        if (res.data.success) {
            dispatch({
                type: ActionConstants.AUTHENTICATE_USER_SUCCESS,
                payload: res.data
            });
        }
        else {
            dispatch({
                type: ActionConstants.AUTHENTICATE_USER_ERROR,
                payload: res.data
            });
        }
    } catch (error) {
        dispatch({
            type: ActionConstants.AUTHENTICATE_USER_ERROR,
            payload: {error: "Ha ocurrido un error de conexión"}
        });
    }
}