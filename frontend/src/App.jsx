import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { NotesSection } from "./components/NotesSection";
import { Sidebar } from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";
import styled from "@emotion/styled";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import { useEffect, useState } from "react";
import { getNotes } from "./services/notes-services";
import { TrashSection } from "./components/TrashSection";

const MainContainer = styled.div`
  display: flex;
  height: calc(100vh - 101px);
`;

function App() {
  const [data, setData] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Notes");

  const updateData = (newData) => {
    setData(newData);
  };

  useEffect(() => {
    if (localStorage.getItem("notes") !== null || undefined) {
      setData(JSON.parse(localStorage.getItem("notes")));
    } else {
      getNotes().then((res) => {
        setData(res);
        localStorage.setItem("notes", JSON.stringify(res));
        console.log(res);
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <AuthenticatedRoute>
              <Header />
              <MainContainer>
                <Sidebar
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                />
                {selectedTab === "Notes"
                  ? data && <NotesSection data={data} setData={updateData} />
                  : data && <TrashSection data={data} setData={updateData} />}
              </MainContainer>
            </AuthenticatedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
