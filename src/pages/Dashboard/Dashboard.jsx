import React, { useContext, useEffect, useState } from "react";
import { StyledDashboard, StyledLinkDashboard } from ".";
import Header from "../../components/Header/Header";
import NewTechModal from "../../components/NewTechsModal/NewTechModal";
import { UserContext } from "../../providers/UserContext";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const { user, loading, handleLogout } = useContext(UserContext);
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
            <div className="tecnologiesRegister">
              <h2>Tecnologias</h2>
              <button onClick={() => setOpenModal(true)}>+</button>
            </div>
            <NewTechModal isOpen={openModal} setOpenModal={setOpenModal} />
          </>
        )}
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
