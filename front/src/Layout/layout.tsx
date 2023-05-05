import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="mt-10">{children}</main>
    </>
  );
};

export default Layout;
