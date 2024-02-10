import styled from "@emotion/styled";
import logoUrl from "/src/OpenKeeper_logo.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth-services";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;
  height: 100px;
`;
const ImageContainer = styled.h1`
  width: 250px;
  padding: 23px 30px;
`;
const HeaderLogo = styled.img`
  height: 80px;
  margin-left: 80px;
`;
const TextContainer = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #fff;
  user-select: none;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  width: 250px;
`;

export const Header = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    await logout();
    sessionStorage.clear();
    localStorage.clear();
    navigate("/", { replace: true });
  };
  return (
    <HeaderContainer>
      <ImageContainer>
        <HeaderLogo src={logoUrl} />
      </ImageContainer>
      <TextContainer>Welcome to Open Keeper</TextContainer>
      <ButtonContainer>
        <Button variant={"Primary"} onClick={handleClick}>
          Sign Out
        </Button>
      </ButtonContainer>
    </HeaderContainer>
  );
};
