import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk'
import rootReducer from "./reducers";
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {
    todos:[]  
}

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
};

const middleware = [thunk]

const pReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//     rootReducer
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )
// export default store

export const store = createStore(pReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export const persistor = persistStore(store);