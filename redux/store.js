import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const rootReducer = combineReducers({
    usuarios: userReducer
});

export default function generateStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middleWares = [sagaMiddleware, thunk];
    const store = createStore(rootReducer, compose(applyMiddleware(...middleWares)));
    sagaMiddleware.run(rootSaga);
    return store;
}