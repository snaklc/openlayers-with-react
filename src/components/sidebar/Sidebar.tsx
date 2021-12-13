import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionChangeWmsLayerVisibility } from '../../redux/action/wms';
import { useAppSelector } from '../../redux/hooks'
import { InputSwitch } from 'primereact/inputswitch';
import { Sidebar as PrimeSidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const mystyle: { [key: string]: React.CSSProperties } = {
    sidebar: {
        position: 'absolute',
        width: '20%',
        top: '0',
        left: '0',
        height: '100%'
    } as React.CSSProperties,
    button: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'white'

    },
    layerOpenClose: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    rowStyle:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

};

export default function Sidebar() {
    const [visible, setVisible] = useState(false);

    const layers = useAppSelector(state => state.wms.layers);
    console.log(layers);
    
    const dispatch = useDispatch()

    const changeVisibility = (index: number, visible: boolean) => {
        dispatch(
            actionChangeWmsLayerVisibility(index, visible)
        )
    }

    return (
        <div>
            <PrimeSidebar visible={visible} position="left" dismissable={false} modal={false} onHide={() => setVisible(false)}>
                {layers.map((l, index) =>
                <label key={index} style={mystyle.rowStyle}>
                     <p>{l.layername}</p>
                    <InputSwitch checked={l.visible} onChange={e => changeVisibility(index, e.value)} />
                </label>
                )}
            </PrimeSidebar>
            <Button style={mystyle.button} label="Katmanlar" className="p-button-outlined" onClick={() => setVisible(true)} />

        </div>
    )
}
