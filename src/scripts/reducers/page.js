import { GET_PHOTOS, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE } from "../constants/Page";

const initialState = {
    year: 2017,
    photos: [],
    fetching: false
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOS:
            return { ...state, year: action.payload, fetching: true };
        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, fetching: false };
        default:
            return state;
    }
}
