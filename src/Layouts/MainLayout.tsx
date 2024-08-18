import NavBar from "@/components/NavBar";
import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex">
      <PanelGroup autoSaveId="persistence" direction="horizontal">
        <Panel minSize={25}>
          <NavBar />
        </Panel>
        <PanelResizeHandle className="w-0.5 bg-[#1f1f1f]" />
        <Panel>{children}</Panel>
      </PanelGroup>
    </div>
  );
}
export default MainLayout;
