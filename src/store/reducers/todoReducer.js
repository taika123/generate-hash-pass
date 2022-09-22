import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
const initialState = {
   todos:[]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': 
        return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ],
                
            }
        case 'DELETE_TODO': 
        return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state
    }
    
}

const persistConfig = {
    key: 'auth',
    storage: storage,
  };

export default persistReducer(persistConfig,todoReducer)