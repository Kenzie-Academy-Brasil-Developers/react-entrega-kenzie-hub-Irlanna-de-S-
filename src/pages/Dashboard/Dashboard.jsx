import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledDashboard, StyledLinkDashboard } from ".";
import api from "../../services/Api";
import Header from "../../components/Header/Header";

const Dashboard = ({ user, setUser, loading, setLoading }) => {
  const navigate = useNavigate();

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
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <>
      <Header>
        <StyledLinkDashboard to="/" onClick={handleLogout}>
          Sair
        </StyledLinkDashboard>
      </Header>
      <StyledDashboard>
        {loading ? (
          <div className="loading">
            <h1>CARREGANDO...</h1>
          </div>
        ) : (
          <>
            <div className="userInformation">
              <h3>Olá, {user.name}</h3>
              <p className="course">{user.course_module}</p>
            </div>
            <div className="maintenanceInformation">
              <h1>Que pena! Estamos em desenvolvimento :(</h1>
              <p>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </p>
            </div>
          </>
        )}
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
