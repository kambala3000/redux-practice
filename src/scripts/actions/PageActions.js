import { GET_PHOTOS, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE } from "../constants/Page";

// export function setYear(year) {
//     return {
//         type: SET_YEAR,
//         payload: year
//     };
// }

export function getPhotos(year) {
    return dispatch => {
        dispatch({
            type: GET_PHOTOS,
            payload: year
        });

        setTimeout(() => {
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: [322, 1488, 228]
            });
        }, 1000);
    };
}
