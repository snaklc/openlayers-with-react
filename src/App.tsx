import { useState } from 'react';
import './App.css';
import { MapComponent } from './components/map/MapComponent';

function App() {
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState([29.32819,38.686243]);

  return (
    <div className="App">
      <MapComponent center={center} zoom={zoom}/>
    </div>
  );
}

export default App;
