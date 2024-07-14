export interface Product {
  id: string;
  image?: string;
  title?: string;
  description?: string;
  price?: string;
  category?: string;
}

export interface ProductsContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface Login {
  email: string;
  password: string;
}

export interface Registro {
  uid?: string;
  displayName?: string;
  newUser?: string;
  email?: string;
  password?: string;
  photoURL?: string;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}
