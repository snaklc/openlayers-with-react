import { AppDispatch } from "../store"


export const actionInitBasemaps = () => (dispatch: AppDispatch) => {
    const arr = [
        {
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            image: 'googleStreet.png',
            title: 'Google Street',
            visible: true,
        },
        {
            url: 'http://mt1.google.com/vt/lyrs=y@113&hl=tr&&x={x}&y={y}&z={z}',
            image: 'googleSatellite.png',
            title: 'Google Satellite',
            visible: false,
        },
        {
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
                'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
            image: 'esristreet.png',
            title: 'Esri Street',
            visible: false,
        }
    ]
    dispatch({
        type: 'SET_BASEMAPS',
        payload: arr
    });
}

export const actionChangeBasemapVisibility = (index: number, visible: boolean) => {
    return {
        type: 'CHANGE_BASEMAP_VISIBILITY',
        payload: {
            index, visible
        }
    }
}


