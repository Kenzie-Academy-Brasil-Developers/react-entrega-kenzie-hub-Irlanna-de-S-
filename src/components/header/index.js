import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  height: 60px;
  align-items: flex-end;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;

  img {
    width: 120px;
    height: 25px;
  }

  button {
    background: #212529;
    border-radius: 3.19812px;
    border: none;
    color: #f8f9fa;
    text-decoration: none;
    padding: 6px 25px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;
  }

  @media (min-width: 425px) {
    width: 368px;
  }

  @media (min-width: 768px) {
    width: 538px;
  }
  @media (min-width: 1000px) {
    width: 795px;
  }
`;

export default StyledHeader;
