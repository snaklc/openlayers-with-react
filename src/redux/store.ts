import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { wmsReducer } from './reducer/wms'
import { basemapsReducer } from './reducer/basemaps';
const rootReducer = combineReducers({
    wms: wmsReducer,
    basemaps: basemapsReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch