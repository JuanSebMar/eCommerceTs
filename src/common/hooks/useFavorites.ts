import { removeLocalStorage } from "../../functions/localStorage";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { getData } from "../utils/functions";

interface Favorites {
  handleFavorites: () => {};
  cleanfavorites: () => { void: any };
}
export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      const data = await getData(user, "favorites");
      setFavorites(data);
    };
    fetch();
  }, []);

  const handleFavorites = async (id: Favorites) => {
    if (user) {
      let updatefavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const coincidenceByUser = updatefavorites.findIndex(
        (item) => item.userId == user?.uid
      );
      if (coincidenceByUser == -1) {
        updatefavorites = [
          ...updatefavorites,
          {
            userId: user.uid,
            items: [id],
          },
        ];
      } else {
        // busco el index o la posicion en el array de productos que hay en el local storage al que coincida por Id
        const coincidenceProduct = updatefavorites[
          coincidenceByUser
        ].items.findIndex((productId) => productId == id);

        if (coincidenceProduct == -1) {
          updatefavorites[coincidenceByUser].items = [
            ...updatefavorites[coincidenceByUser].items,
            id,
          ];
          toast.success("Add to favorites");
        } else {
          updatefavorites[coincidenceByUser].items = updatefavorites[
            coincidenceByUser
          ].items.filter((productId) => productId != id);
          toast.success("Item Delete");
        }
      }
      // guardo en el local storage ese array actualixado el cual puede tenr o un item nuevo o un item con una cantidad aumentada
      localStorage.setItem("favorites", JSON.stringify(updatefavorites));
      //como la linea anterior actualiza el local storage vuelvo a llmar a getData para,"favorites" hacer un get de esos nuevos cambios
      const data = await getData(user, "favorites"); // getData me d,"favorites"evuelve un array con los productos enteros(se le agrega img, title, etc )
      setFavorites(data);
    } else {
      toast.info("Inicia sesion Guacho");
    }
  };

  const cleanfavorites = () => {
    removeLocalStorage("favorites");
    navigate("/", { replace: true });
  };

  return {
    cleanfavorites,
    favorites,
    handleFavorites,
  };
};
