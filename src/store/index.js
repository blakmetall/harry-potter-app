import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// import { save, load } from 'redux-localstorage-simple';
import { charactersReducer, staffReducer, studentsReducer } from './reducers';

const middlewares = [thunk.withExtraArgument()];

const reducers = combineReducers({
    characters: charactersReducer,
    staff: staffReducer,
    students: studentsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithLocalStorageMiddleware = composeEnhancer(applyMiddleware(...middlewares))(createStore);

const store = createStoreWithLocalStorageMiddleware(reducers);

export default store;
