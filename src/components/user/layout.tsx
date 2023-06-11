import { ReactElement } from "react";

import NavBar from "./navbar";

interface LayoutProps {
  children: ReactElement;
}
function Layout({ children }: LayoutProps) {
  return (
    <div className=" container  ">
      <NavBar />

      {children}
    </div>
  );
}

export default Layout;
