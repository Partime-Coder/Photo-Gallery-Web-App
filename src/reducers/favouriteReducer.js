import { setFavourites } from "../service/localStorageService";


export const favouriteReducer = (state, action) => {

    if (action.type === "TOGGLE_FAVOURITE") {
        const updatedData = state.includes(String(action.payload))
            ? state.filter((id) => id !== String(action.payload))
            : [...state, String(action.payload)];

        setFavourites(updatedData);
        return updatedData;
    };

    if (action.type === "INIT_FAVOURITES") {
        return action.payload || [];
    }
    return state;
};