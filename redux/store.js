import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import stateReducer from './reducers/stateReducer';

const rootReducer = combineReducers({
    usuarios: userReducer,
    state: stateReducer
});


const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware, thunk];
const mainStore = createStore(rootReducer, compose(applyMiddleware(...middleWares)));
sagaMiddleware.run(rootSaga);

export default mainStore;