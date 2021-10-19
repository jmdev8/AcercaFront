import {createStore, combineReducers, applyMiddleware} from 'redux'
import { vehicleReducer } from './reducers/vehicleReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const reducer = combineReducers({
    vehicles: vehicleReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

