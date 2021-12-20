import { PropsWithChildren, useContext, useEffect, useRef } from 'react'
import { MapContext } from '../MapContext'
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { TileLayerContext } from './TileLayerContext';


interface Props {
    url: string;
    visible: boolean;
}
export const Tile = (props: PropsWithChildren<Props>) => {
    const map = useContext(MapContext)
    const t = useRef<TileLayer<XYZ>>(new TileLayer())

    useEffect(() => {
        const tileLayer = new TileLayer({
            source: new XYZ({
                url: props.url
            }),
            visible: props.visible
        })
        map.addLayer(tileLayer);
        return () => {
            map.removeLayer(tileLayer);
        }
    }, []);

    useEffect(() => {
        const tileLayer = t.current!;
        tileLayer.setVisible(props.visible)

    }, [props.visible])

    return <TileLayerContext.Provider value={t.current}>{props.children}</TileLayerContext.Provider>;

}

export default Tile;