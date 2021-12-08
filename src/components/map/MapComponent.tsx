import './MapComponent.scss'
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { useEffect } from 'react';
import TileWMS from 'ol/source/TileWMS';
import { Tile as TileLayer } from 'ol/layer';
import XYZ from 'ol/source/XYZ';


interface Props{
    center: Array<number>;
    zoom: number;
    
}
export const MapComponent = (props: Props) => {
    useEffect(() => {

        const map: Map = createMap();
        addKampusBasemap(map);

    }, [])

    const createMap = () => {
        const map = new Map({
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url:'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    }),
                }),

            ],
            target: 'map',
            view: new View({
                center: props.center,
                zoom: props.zoom,
                projection: "EPSG:4326"
            }),
        });
        return map;
    }

    const addKampusBasemap = (map: Map) => {
        const basemap = new TileLayer({
            source: new TileWMS({
                url: 'https://kampus.ankageo.com/geoserver/kampus/wms',
                params: { 'LAYERS': 'kampus:altlik', 'TILED': true },
                serverType: 'geoserver',
                projection: "EPSG:4326"
            }),

        });

        map.addLayer(basemap);
    }

    return (
        <div>
            <div id="map"></div>
        </div>
    )
}
