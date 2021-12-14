import { AppDispatch } from "../store"


export const actionInitBasemaps = () => (dispatch: AppDispatch) => {
    const arr = [
        {
            url: 'https://kampus.ankageo.com/geoserver/kampus/wms',
            layername: ['Fakulte_usr'],
            visible: true,
        },
        {
            url: 'https://kampus.ankageo.com/geoserver/kampus/wms',
            layername: ['Otopark_usr'],
            visible: true,
        },
        {
            url: 'https://kampus.ankageo.com/geoserver/kampus/wms',
            layername: ['Rektorluk_usr'],
            visible: true,
        }
    ]
    dispatch({
        type: 'SET_WMS_LAYERS',
        payload: arr
    });
}

export const actionChangeBasemapVisibility = (index: number, visible: boolean) => {
    return {
        type: 'CHANGE_WMS_LAYER_VISIBILITY',
        payload: {
            index, visible
        }
    }
}


