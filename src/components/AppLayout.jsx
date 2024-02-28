import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="mx-auto flex flex-col sm:max-w-sm lg:max-w-7xl">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
