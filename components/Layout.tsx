import * as React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { ILayout } from "../types";

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      {children}
    </div>
  );
};

export default Layout;
