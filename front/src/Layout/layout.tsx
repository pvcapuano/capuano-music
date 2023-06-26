import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100">{children}</main>
    </>
  );
};

export default Layout;
