import React,{useReducer} from 'react';
import SaleReducer from './reducer/SaleReducer'

const useSaler = () => {
    const [saleState,dispatch]= useReducer(SaleReducer, {})
    return (
        <div>
            
        </div>
    )
}

export default Store
