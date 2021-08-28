import React from 'react';
import {Button} from 'antd'
import '../../sass/app/components/atoms.scss';

const ButtonCustom = ({children,addClass,...rest}) => {
    return (
        <Button {...rest} className={`btn_btn-default ${addClass ? addClass : ""}` }>
            {children}
        </Button>
    )
}



export default ButtonCustom
