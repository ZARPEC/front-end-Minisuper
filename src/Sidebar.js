import sidebarTemplate from "./View/Partials/SideBar.html";

const sidebar = () => {
  return (
    <div
      style={{ height: "100%" }} 
      dangerouslySetInnerHTML={{ __html: sidebarTemplate }}
    />
  );
};

export default sidebar;
