import React from 'react';
import store from './redux/redux-store';

export const Provider =(props) => {
    return <StoreContext.Provider value={store}>
        {props.children}
        </StoreContext.Provider>
}
const StoreContext = React.createContext(null);

export default StoreContext;
