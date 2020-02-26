import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistCombineReducers } from 'redux-persist';
import reducers from '../Reducers/Index';
const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
    //middleware.push(logger);
}

const configStore = () => {
    const persistReducer = persistCombineReducers({
        key: 'root',
        storage: AsyncStorage,
        blacklist: ['network'],
    }, reducers);
    const store = createStore(persistReducer, applyMiddleware(...middleware));
    const persistor = persistStore(store);

    return { store, persistor };
};
//For offline data persistence
//To watch store for any change in state
//And save in asyncstorage
//persistStore(store,{storage:AsyncStorage});

export default configStore
