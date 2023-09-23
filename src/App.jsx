import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start/Start";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn/Log-in";
import SignUp from "./pages/SignUp/SignUp";
import { CollectionDetails, Collections } from "./pages/Collection";
import Dashboard from "./pages/Dashboard/Dashboard";
import Account from "./pages/Account/Account";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StartLayout, AppLayout, ContentLayout } from "./layout";
import ProtectedRoutes from "./utils/ProtectedRoutes";
function App() {
  const { collections } = useSelector((store) => store.collections);
  useEffect(() => {
    console.log("upload");
  }, [collections]);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartLayout />}>
            <Route index element={<Start />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="login" element={<LogIn />} />
          <Route path="singUp" element={<SignUp />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<AppLayout />}>
              <Route path="collections" element={<Collections />} />
              <Route path="/" element={<ContentLayout />}>
                <Route path="collections/:id" element={<CollectionDetails />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="account" element={<Account />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
