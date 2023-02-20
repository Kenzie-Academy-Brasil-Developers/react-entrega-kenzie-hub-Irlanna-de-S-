import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyledDashboard from ".";
import Loading from "../../components/Loading/index";
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
    <StyledDashboard>
      <Header>
        <Link to="/" onClick={handleLogout}>
          Sair
        </Link>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div>
            <h3>Olá, {user.name}</h3>
            <p>{user.course_module}</p>
          </div>
          <div>
            <h1>Que pena! Estamos em desenvolvimento :(</h1>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </>
      )}
    </StyledDashboard>
  );
};

export default Dashboard;
