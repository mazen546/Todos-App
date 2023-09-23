import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
export const AppContext = createContext();
function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  const handelShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const hideSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <AppContext.Provider
      value={{ showSidebar, handelShowSidebar, hideSidebar }}
    >
      <Header />
      <Outlet />
    </AppContext.Provider>
  );
}

export default AppLayout;
