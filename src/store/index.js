import rootReducer from './reducers';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

export function configureStore(){
    const store=createStore(rootReducer,
        compose(
            applyMiddleware(thunk),
            //below line is for debugging redux in chrome 
            //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));
    return store;
};

