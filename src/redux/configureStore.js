import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import randomImagesReducer from "./reducers/randomImages";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  randomImages: randomImagesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
