import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDashboard = styled.main`
  .loading{
    width:100%;
    height:500px;
    margin:0 auto;
    display:flex;justify-content: center;
    align-items: center;
  }
  .userInformation {
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 12px;
    gap: 10px;
    border: 1px solid #212529;
  }
  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }
  .course {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    /* identical to box height, or 183% */

    color: #868e96;
  }

  .maintenanceInformation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 12px;
    gap: 10px;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
  }

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    margin-top: 20px;
  }
  @media (min-width: 767px) {
    .userInformation {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 50px;
    }
  }
`;

export const StyledLinkDashboard = styled(Link)`
  background: var(--grey-3);
  border-radius: 4px;
  padding: 10px 16.2426px;
  color: var(--grey-0);
  font-style: normal;
  font-weight: 600;
  font-size: 0.6rem;
  line-height: 23px;
`;
