import { MapBrowserEvent } from 'ol';
import React, { useContext, useEffect } from 'react'
import { MapContext } from '../MapContext';
import { WmsLayerContext } from '../wms-layer/WmsLayerContext';

export const WmsGetFeatureInfo = () => {
    const map = useContext(MapContext)
    const wms = useContext(WmsLayerContext)

    useEffect(() => {
        const onClick = (event: MapBrowserEvent<any>) => {
            if (!wms) {
                return;
            }
            const view = map.getView();
            const url = wms.getSource().getFeatureInfoUrl(
                event.coordinate,
                view.getResolution()!,
                view.getProjection(), {
                    QUERY_LAYERS: wms.getSource().getParams().layers,
                    info_format: 'application/json'
                },
            );
        }
        map.on('click', onClick)

        return () => {
            map.un('click', onClick)
        }
    }, []);

    return null;
}
