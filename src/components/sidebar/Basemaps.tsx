import React from 'react'

const style: { [key: string]: React.CSSProperties } = {
    basemapContainer: {
        background: 'white',
        border: '1px solid #3B82F6',
        borderRadius: '6px',
        position: 'absolute',
        left: '184px',
        top: '95px',
        padding: '15px',
        width: '310px'
    } as React.CSSProperties,
    box: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    image: {
        border: '1px solid #3B82F6', 
        borderRadius: '5px'
    }
}
export const Basemaps = () => {
    return (
        <div style={style.basemapContainer}>
            <h4 style={{ color: '#3B82F6', textAlign:'start' }}>Standart Haritalar</h4>
            <div style={style.box}>
                <div style={{padding:0}}>
                    <img style={style.image} src="googleStreet.png" alt="googleStreet" width="80px" height="80px" />
                    <p style={{ fontSize: '12px' }}>Google<br/>Street</p>
                </div>
                <div>
                    <img style={style.image} src="googleSatellite.png" alt="googleStreet" width="80px" height="80px" />
                    <p style={{ fontSize: '12px' }}>Google<br/>Satellite</p>
                </div>
                <div>
                    <img style={style.image} src="esristreet.png" alt="googleStreet" width="80px" height="80px" />
                    <p style={{ fontSize: '12px' }}>Esri<br/>Street</p>
                </div>

            </div>
        </div>
    );
}
