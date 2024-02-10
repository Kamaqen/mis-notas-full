import styled from "@emotion/styled";
import NoteForm from "./NoteForm";
import CardComponent from "./NoteCard";
import { useEffect, useState } from "react";
import UpdateNoteForm from "./UpdateNoteForm";

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

export const NotesSection = ({ data, setData }) => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [noteId, setNoteId] = useState(null);

  useEffect(() => {
    const notes = data || JSON.parse(localStorage.getItem("notes"));
    const filteredNotes = notes.filter((note) => note.is_active === true);
    console.log(filteredNotes);
    setActiveNotes(filteredNotes);
  }, [data]);

  return (
    <NotesContainer>
      {noteId !== null ? (
        <UpdateNoteForm
          setData={setData}
          noteId={noteId}
          setNoteId={setNoteId}
        />
      ) : (
        <NoteForm setData={setData} />
      )}
      <CardsContainer>
        {activeNotes.map((note) => (
          <CardComponent
            id={note.id}
            key={note.id}
            title={note.title}
            category={note.category}
            body={note.body}
            userId={sessionStorage.getItem("userId")}
            active={note.is_active}
            footer={true}
            setNoteId={setNoteId}
          />
        ))}
      </CardsContainer>
    </NotesContainer>
  );
};
