import React, { useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Map from './components/map/Map';
import './App.scss';
import WmsLayer from './components/map/wms-layer/WmsLayer';
import { useAppSelector } from './redux/hooks';
import { useDispatch } from 'react-redux';
import { actionInitWmsLayers } from './redux/action/wms';
import { WmsGetFeatureInfo } from './components/map/wms-getfeatureinfo/WmsGetFeatureInfo';
import Tile from './components/map/tile-layer/Tile';

function App() {

  const wmsLayers = useAppSelector(state => state.wms.layers);
  const basemaps = useAppSelector(state => state.basemaps.basemaps);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionInitWmsLayers())
  }, []);
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="map-container">
        <Map>
          {wmsLayers.map(a =>
            <WmsLayer
              key={a.url + a.layername}
              url={a.url}
              layername={a.layername}
              visible={a.visible}>
              {a.visible && <WmsGetFeatureInfo />}

            </WmsLayer>
          )}
          {basemaps.map(basemap =>  basemap.visible && <Tile key={basemap.url} url={basemap.url} visible={basemap.visible} /> 
          )
          }
        </Map>
      </div>
    </div>
  );
}

export default App;
