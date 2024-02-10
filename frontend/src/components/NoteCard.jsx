import styled from "@emotion/styled";
// import PropTypes from "prop-types";
import { BiEdit } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiUploadLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { deleteNote, updateNote } from "../services/notes-services";
import Button from "./Button";

const CardContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background: #f08c19e8;
  padding: 20px;
  color: #fff;
  width: 240px;
  height: ${(props) => (props.footer ? "250px" : "240px")};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  padding: 5px;
  text-transform: capitalize;
`;
const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  padding: 5px;
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  padding: 5px;
  margin-top: 10px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  bottom: 0;
  width: 100%;
  height: ${(props) => (props.footer ? "47px" : "7px")};
`;

const CardComponent = ({
  id,
  title,
  body,
  category,
  userId,
  active,
  footer,
  setNoteId,
  onClose,
}) => {
  const [noteData, setNoteData] = useState({});

  useEffect(() => {
    setNoteData(() => ({
      id: id,
      title: title,
      body: body,
      category: category,
      is_active: !active,
      user_id: userId,
    }));
  }, [active]);

  const handleClick = () => {
    setNoteId(id);
    console.log(id);
  };
  // async function handleActive() {
  //   await updateNote(id, noteData);
  //   localStorage.clear();
  //   onClose();
  // }
  // async function handleDelete() {
  //   await deleteNote(id, noteData);
  //   localStorage.clear();
  //   onClose();
  // }
  return (
    <CardContainer footer={footer}>
      <div>
        <TitleContainer>{title}</TitleContainer>
        <CategoryContainer>{category}</CategoryContainer>
        <TextContainer>{body}</TextContainer>
      </div>
      <CardFooter footer={footer}>
        {footer && (
          <>
            <Button size={"icon"} onClick={handleClick}>
              <BiEdit />
            </Button>
            <Button size={"icon"}>
              <AiOutlineCloseCircle />
            </Button>
          </>
        )}
        {/* {footer && (
          <>
            <StyledLink onClick={active ? handleUpdateNote : handleActive}>
              {active ? <BiEdit /> : <RiUploadLine />}{" "}
              {active ? "Edit" : "Restore"}
            </StyledLink>
            <StyledLink onClick={active ? handleActive : handleDelete}>
              {active ? <AiOutlineCloseCircle /> : <RiDeleteBin6Line />}{" "}
              {active ? "Archive" : "Delete"}
            </StyledLink>
          </>
        )} */}
      </CardFooter>
    </CardContainer>
  );
};

export default CardComponent;
