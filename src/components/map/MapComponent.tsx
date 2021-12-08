import './MapComponent.scss'
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { useEffect } from 'react';
import TileWMS from 'ol/source/TileWMS';
import { Tile as TileLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';
import { add } from 'ol/coordinate';

export const MapComponent = () => {
    useEffect(() => {

        const map: Map = createMap();
        addKampusBasemap(map);

    }, [])

    const createMap = () => {
        const map = new Map({
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),

            ],
            target: 'map',
            view: new View({
                center: [28.96, 41.03],
                zoom: 5,
                projection: "EPSG:3857"
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
