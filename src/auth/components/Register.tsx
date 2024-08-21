import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Registro } from "../../common/interfaces/interface";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const Register: React.FC<Registro> = ({ newUser, email, password }) => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const onRegister = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(auth);
      console.log(email);
      console.log(password);

      await updateProfile(auth.currentUser, {
        displayName: newUser,
      });
      setUser(userCredential.user);

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
    }
  };
  return (
    <button
      className="btn btn-primary mt-2"
      onClick={onRegister}>
      Sing in
    </button>
  );
};
