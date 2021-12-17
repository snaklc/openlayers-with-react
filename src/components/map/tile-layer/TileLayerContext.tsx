import React from "react";

import TileLayer from 'ol/layer/Tile';
import { XYZ } from "ol/source";

export const TileLayerContext = React.createContext<TileLayer<XYZ> | null>(null);

