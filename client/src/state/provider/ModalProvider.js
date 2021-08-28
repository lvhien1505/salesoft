import React from 'react';
import {ModalContext} from '../context/Context'

const ModalProvider = ({children}) => {
    let store = {
        visible:false
    }
    return (
        <ModalContext.Provider value={store}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
