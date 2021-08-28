import React from 'react';
import {SaleContext} from '../context/Context'

const SaleProvider = ({store,children}) => {

    return (
        <SaleContext.Provider value={store}>
            {children}
        </SaleContext.Provider>
    )
}

export default SaleProvider
