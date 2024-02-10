import styled from "@emotion/styled";
import Button from "./Button";
import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { createNote, getNotes } from "../services/notes-services";

const FormContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px 0px #00000033;
  background-color: #ffffff;
  width: 600px;
  height: 150px;
  padding: 20px;
  margin: 24px auto 30px;
  border-radius: 8px;
`;
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const NoteForm = ({ setData }) => {
  const userId = sessionStorage.getItem("userId");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    body: "",
    user_id: userId,
    is_active: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      is_active: true,
    };
    await createNote(updatedFormData);
    setFormData({ title: "", category: "", body: "" });
    localStorage.clear();
    handleCreateNote();
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleCreateNote = async () => {
    const updatedNotes = await getNotes();
    setData(updatedNotes);
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              name="title"
              placeholder="Note Title"
              value={formData.title}
              onChange={handleChange}
            />
            <Input
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
            />
            <Textarea
              name="body"
              placeholder="Here goes the body of the note."
              value={formData.body}
              onChange={handleChange}
            />
            <ButtonContainer>
              <Button type="submit" variant="Ghost">
                Keep it!
              </Button>
            </ButtonContainer>
          </InputContainer>
        </Form>
      </FormContainer>
    </>
  );
};

export default NoteForm;
