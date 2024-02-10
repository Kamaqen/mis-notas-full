import styled from "@emotion/styled";
import CardComponent from "./NoteCard";
import { useEffect, useState } from "react";

const NotesContainer = styled.div`
  padding: 10px 0px;
  width: calc(100vw - 279px);
  overflow-y: auto;
  border-left: 1px solid white;
`;
const CardsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 50px;

  @media screen {
    gap: 20px;
  }
`;

export const TrashSection = ({ data, setData }) => {
  const [inactiveNotes, setInactiveNotes] = useState([]);

  useEffect(() => {
    const notes = data || JSON.parse(localStorage.getItem("notes"));
    const filteredNotes = notes.filter((note) => note.is_active === true);
    console.log(filteredNotes);
    setInactiveNotes(filteredNotes);
  }, [data]);

  return (
    <NotesContainer>
      <CardsContainer>
        {inactiveNotes.map((note) => (
          <CardComponent
            key={note.id}
            title={note.title}
            category={note.category}
            body={note.body}
            userId={sessionStorage.getItem("userId")}
            active={note.is_active}
            footer={true}
          />
        ))}
      </CardsContainer>
    </NotesContainer>
  );
};
