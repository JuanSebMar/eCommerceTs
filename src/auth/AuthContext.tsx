import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { app } from "../common/firebase/firebase";
import { Registro } from "../common/interfaces/interface";
import { GoogleAuthProvider } from "firebase/auth";

interface AuthContextProps {
  user: Registro;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<any>("");

  const signInWithGoogle = async () => {
    try {
      const auth = getAuth(app);
      const authGoogle = new GoogleAuthProvider();
      authGoogle.setCustomParameters({ prompt: "select_account" });

      const googleUserCredential = await signInWithPopup(auth, authGoogle);
      setUser(googleUserCredential.user);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  return context;
};
