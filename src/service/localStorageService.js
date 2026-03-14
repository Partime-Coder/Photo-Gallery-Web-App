
export const getFavourites = () => {
  try {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Failed to get favourites from localStorage:", err);
    return [];
  }
};

export const setFavourites = (favourites) => {
  try {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  } catch (err) {
    console.error("Failed to save favourites to localStorage:", err);
  }
};