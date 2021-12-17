import React, { useEffect, PropsWithChildren, useState, useRef } from 'react'
import { Map as OlMap, View, } from 'ol'
import XYZ from 'ol/source/XYZ';
import { Tile } from 'ol/layer'
import './Map.scss';
import { MapContext } from './MapContext';

interface Props { }

export default function Map(props: PropsWithChildren<Props>) {
    const mapRef = useRef(document.createElement('div'))
    const [olMap, setOlMap] = useState<OlMap | null>(null);
    useEffect(() => {
        const map = new OlMap({
            view: new View({
                center: [3265070.9626, 4674849.2371],
                zoom: 16,
            }),
            controls: [],
            target: mapRef.current,
            layers: [
              
            ],
        });
        setOlMap(map);
        return () => {
            map.dispose();
        }
    }, []);
    return (
        <>
            <div className='Map' ref={mapRef}></div>
            {
                olMap &&
                <MapContext.Provider value={olMap}>
                    {props.children}
                </MapContext.Provider>
            }
        </>
    )
}
