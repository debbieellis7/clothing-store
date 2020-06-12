import { createStore } from 'redux'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'

export const store = createStore(rootReducer, composeWithDevTools())

export const persistor = persistStore(store)
