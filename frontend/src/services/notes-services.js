import apiFetch from "./api-fetch";

export async function getNotes() {
  try {
    return await apiFetch("/notes");
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
}

export async function createNote(data) {
  try {
    return await apiFetch("/notes", {
      body: data,
      method: "POST",
    });
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
}

export async function updateNote(id, data) {
  try {
    return await apiFetch(`/notes/${id}`, {
      body: data,
      method: "PATCH",
    });
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
}

export async function deleteNote(id) {
  try {
    return await apiFetch(`/notes/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
}

export async function showNote(id) {
  try {
    const response = await apiFetch(`/notes/${id}`);
    if (response) {
      return response;
    } else {
      throw new Error("Note not found");
    }
  } catch (error) {
    console.error("Error fetching note:", error);
    throw error;
  }
}
