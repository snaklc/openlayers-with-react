import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionChangeWmsLayerVisibility } from '../../redux/action/wms';
import { useAppSelector } from '../../redux/hooks'
import { InputSwitch } from 'primereact/inputswitch';
import { Sidebar as PrimeSidebar } from 'primereact/sidebar';
import { Button } from '../Button';

const mystyle: { [key: string]: React.CSSProperties } = {
    sidebar: {
        position: 'absolute',
        width: '20%',
        top: '0',
        left: '0',
        height: '100%'
    } as React.CSSProperties,

    layerOpenClose: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    buttonGroup:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: '20px',
        left: '20px',
        width:'460px',
        padding: '20px 30px'

    },
    buttonStyle: {
        background: 'white'
    },
    rowStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
};

export default function Sidebar() {
    const [visible, setVisible] = useState(false);

    const layers = useAppSelector(state => state.wms.layers);

    const dispatch = useDispatch()

    const changeVisibility = (index: number, visible: boolean) => {
        dispatch(
            actionChangeWmsLayerVisibility(index, visible)
        )
    }

    return (
        <div>
            <PrimeSidebar visible={visible} position="left" dismissable={false} modal={false} onHide={() => setVisible(false)}>
                <h1>Katmanlar</h1>
                {layers.map((l, index) =>
                    <label key={index} style={mystyle.rowStyle}>
                        <p>{l.layername}</p>
                        <InputSwitch checked={l.visible} onChange={e => changeVisibility(index, e.value)} />
                    </label>
                )}
            </PrimeSidebar>
            <div style={mystyle.buttonGroup}>
                <Button style={mystyle.buttonStyle} label="Katmanlar" className="p-button-outlined" onClick={() => setVisible(true)} />
                <Button style={mystyle.buttonStyle} label="Haritalar" className="p-button-outlined" onClick={() => console.log('SA')} />
                <Button style={mystyle.buttonStyle} label="Nasıl Giderim" className="p-button-outlined" onClick={() => console.log('Gidemezsin')} />
            </div>

        </div>
    )
}
