import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import settingsReducer from './reducers/settingsReducer';

const rootReducer = combineReducers({
    settingsReducer: settingsReducer
});

const configureStore = () => createStore(rootReducer,applyMiddleware(thunk));

export default configureStore;