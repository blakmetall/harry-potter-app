import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import { membersReducer, staffReducer, studentsReducer } from './reducers';

const middlewares = [thunk.withExtraArgument(), save()];

const reducers = combineReducers({
    members: membersReducer,
    staff: staffReducer,
    students: studentsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithLocalStorageMiddleware = composeEnhancer(applyMiddleware(...middlewares))(createStore);

const store = createStoreWithLocalStorageMiddleware(reducers, load());

export default store;
