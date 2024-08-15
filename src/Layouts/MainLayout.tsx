import NavBar from "@/components/NavBar";
import { ReactNode } from "react";
function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex">
      <NavBar />
      {children}
    </div>
  );
}
export default MainLayout;
