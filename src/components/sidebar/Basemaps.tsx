import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { actionChangeBasemapVisibility, actionInitBasemaps } from '../../redux/action/basemaps';
import { useAppSelector } from '../../redux/hooks';

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
        borderRadius: '5px',
    } as React.CSSProperties,
}

export const Basemaps = () => {
    const basemaps = useAppSelector(state => state.basemaps.basemaps);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionInitBasemaps())
    }, [])

    const changeBasemapVisibility = (index:number, visibility:boolean) => {
        basemaps.map((basemap)=>{
            basemap.visible = false;
        })

        dispatch(actionChangeBasemapVisibility(index, visibility))
    }

    return (
        <div style={style.basemapContainer}>
            <h4 style={{ color: '#3B82F6', textAlign: 'start' }}>Standart Haritalar</h4>
            <div style={style.box}>
                {basemaps.map((basemap, index) =>
                    <div key={index} style={{ padding: 0 }} onClick={() => changeBasemapVisibility(index, true )}>
                        <img className="cursor deneme" style={style.image} src={basemap.image} alt="googleStreet" width="80px" height="80px" />
                        <p style={{ fontSize: '12px' }}>{basemap.title}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
