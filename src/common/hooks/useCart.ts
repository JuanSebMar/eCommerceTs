import { removeLocalStorage } from "../../functions/localStorage";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { getData } from "../utils/functions";

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      const data = await getData(user, "cart");
      setCart(data);
    };
    fetch();
  }, []);

  const handleAddToCart = async (id: string) => {
    if (user) {
      //busco lo que hay en el local storage
      //updatecart es algo asi como [{userID: user.id, Items:[{id,quantity}]}]
      let updateCart = JSON.parse(localStorage.getItem("cart")) || [];
      const coincidenceByUser = updateCart.findIndex(
        (item) => item.userId == user.uid
      );
      //TODO: corregir contexto de autenticacion, agregar IDs
      if (coincidenceByUser == -1) {
        updateCart = [
          ...updateCart,
          {
            userId: user.uid,
            items: [{ id, quantity: 1 }],
          },
        ];
      } else {
        // busco el index o la posicion en el array de productos que hay en el local storage al que coincida por Id
        const coincidenceProduct = updateCart[
          coincidenceByUser
        ].items.findIndex((product) => product.id == id);
        if (coincidenceProduct == -1) {
          updateCart[coincidenceByUser].items = [
            ...updateCart[coincidenceByUser].items,
            { id, quantity: 1 },
          ];
        } else {
          updateCart[coincidenceByUser].items[coincidenceProduct] = {
            ...updateCart[coincidenceByUser].items[coincidenceProduct],
            quantity:
              updateCart[coincidenceByUser].items[coincidenceProduct].quantity +
              1,
          };
        }
      }
      // guardo en el local storage ese array actualixado el cual puede tenr o un item nuevo o un item con una cantidad aumentada
      localStorage.setItem("cart", JSON.stringify(updateCart));
      //como la linea anterior actualiza el local storage vuelvo a llmar a getData para hacer un get de esos nuevos cambios
      const data = await getData(user, "cart"); // getData me devuelve un array con los productos enteros(se le agrega img, title, etc )
      setCart(data);
      toast.success("Add to Cart");
    } else {
      toast.info("Inicia sesion");
    }
  };

  const handleLessToCart = async (id: string) => {
    toast.success("Item Delete");
    let updateCart = JSON.parse(localStorage.getItem("cart")) || [];

    const coincidenceByUser = updateCart.findIndex(
      (item) => item.userId == user.uid
    );
    if (coincidenceByUser != -1) {
      // busco el index o la posicion en el array de productos que hay en el local storage al que coincida por Id
      const coincidenceProduct = updateCart[coincidenceByUser].items.findIndex(
        (product) => product.id == id
      );
      //findIndex devuelve -1 en caso de que no encuentre nada que cumpla la condicion de que product.id sea igual al id que le estoy pasando por parametros
      if (coincidenceProduct != -1) {
        if (
          updateCart[coincidenceByUser].items[coincidenceProduct].quantity > 1
        ) {
          // como hubo coincidencia y findIndex me devuelve el index o posicion del array, luego piso ese mismo array en esa posicion y altero la quantity
          updateCart[coincidenceByUser].items[coincidenceProduct] = {
            ...updateCart[coincidenceByUser].items[coincidenceProduct],
            quantity:
              updateCart[coincidenceByUser].items[coincidenceProduct].quantity -
              1,
          };
        } else {
          // devuelvo todos los productos distintos del item con el id que mande
          updateCart[coincidenceByUser].items = updateCart[
            coincidenceByUser
          ].items.filter((product) => product.id != id);
        }
      }
    }

    // guardo en el local storage ese array actualixado el cual puede tenr o un item nuevo o un item con una cantidad aumentada
    localStorage.setItem("cart", JSON.stringify(updateCart));
    //como la linea anterior actualiza el local storage vuelvo a llmar a getData para hacer un get de esos nuevos cambios
    const data = await getData(user, "cart"); // getData me devuelve un array con los productos enteros(se le agrega img, title, etc )
    setCart(data);
    //finalmente seteo ese nuevo array de productos enteros en cart
  };
  const handleRemoveItem = async (id) => {
    toast.success("Item Delete");
    let updateCart = JSON.parse(localStorage.getItem("cart")) || [];
    const coincidenceByUser = updateCart.findIndex(
      (item) => item.userId == user.uid
    );
    if (coincidenceByUser != -1) {
      const coincidence = updateCart[coincidenceByUser].items.findIndex(
        (product) => product.id == id
      );

      if (coincidence != -1) {
        updateCart[coincidenceByUser].items = updateCart[
          coincidenceByUser
        ].items.filter((product) => product.id != id);
      }
    }

    // guardo en el local storage ese array actualixado el cual puede tenr o un item nuevo o un item con una cantidad aumentada
    localStorage.setItem("cart", JSON.stringify(updateCart));
    //como la linea anterior actualiza el local storage vuelvo a llmar a getData para hacer un get de esos nuevos cambios
    const data = await getData(user, "cart"); // getData me devuelve un array con los productos enteros(se le agrega img, title, etc )
    setCart(data);
    //finalmente seteo ese nuevo array de productos enteros en cart
  };
  const cleanCart = () => {
    removeLocalStorage("cart");
    navigate("/", { replace: true });
  };

  return {
    handleAddToCart,
    handleLessToCart,
    handleRemoveItem,
    cleanCart,
    cart,
  };
};
