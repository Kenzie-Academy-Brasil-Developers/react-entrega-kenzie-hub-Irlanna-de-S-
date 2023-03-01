import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/Api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };

      userAutoLogin();
    }
  }, []);

  const newUser = async (data) => {
    try {
      await api.post("/users", data);
      navigate("/");
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Por favor, verifique os dados informados.");
    }
  };

  const User = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", response.data.token);
      setUser(response.data.user);
      toast.success(`Usúario logado com sucesso`);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha inválido.");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("@TOKEN");
        api.defaults.headers.authorization = `Bearer ${token}`;
        const response = await api.get("/profile");
        setUser(response.data);
      } catch (error) {
        console.log(error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        newUser,
        User,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
