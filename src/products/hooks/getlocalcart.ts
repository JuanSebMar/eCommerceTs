import { getOneProduct } from "../services/productService";

//esta funcion busca lo que hay en el carrito mapea los ids y trae los productos por esos ids
export const getData = async (user, name) => {
  const localData = JSON.parse(localStorage.getItem(name)) || [];
  //uso flatMap para aplanar todos los arrays de items de todos los  objetos que hay en el localstorage
  const promises = localData
    .filter((cart) => cart.userId == user?.uid)
    .flatMap((item) => {
      if (item.items.length > 0) {
        //accedo a .items porque item es igual a {usrId, items}
        return item?.items.map(async (product) => {
          const data = await getOneProduct(product?.id ?? product);
          return { ...data, quantity: product.quantity };
        });
      } else {
        return [];
      }
    });
  const data = await Promise.all(promises);
  return data;
};
