import { createContext, useEffect, useState } from "react";
import api from "../services/Api";

export const TechnologiesContext = createContext({});

export const TechnologiesProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {

  }, []);

  const newTech = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.post("/users/techs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTechs(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    newTech();
  };

  return (
    <TechnologiesContext.Provider value={newTech}>
      {children}
    </TechnologiesContext.Provider>
  );
};
