import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children?: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
