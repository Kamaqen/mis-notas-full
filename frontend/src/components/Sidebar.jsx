import styled from "@emotion/styled";

const SidebarContainer = styled.div`
  width: 280px;
`;

const SidebarMenu = styled.div`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const SidebarTab = styled.div`
  padding: 14px 20px;
  border-radius: 0px 25px 25px 0px;
  text-align: -webkit-match-parent;
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  background: ${(props) => (props.selected ? "#999b9e" : "transparent")};
`;

export const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <SidebarContainer>
      <SidebarMenu>
        <SidebarTab
          selected={selectedTab === "Notes"}
          onClick={() => handleTabClick("Notes")}
        >
          Notes
        </SidebarTab>
        <SidebarTab
          selected={selectedTab === "Trash"}
          onClick={() => handleTabClick("Trash")}
        >
          Trash
        </SidebarTab>
      </SidebarMenu>
    </SidebarContainer>
  );
};
