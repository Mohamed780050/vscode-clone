import Content from "@/components/Content";
import NavBar from "@/components/NavBar";
import { SheetDemo } from "@/components/SheetDemo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function MainLayout() {
  return (
    <>
      <div className="h-screen hidden md:flex">
        <PanelGroup autoSaveId="persistence" direction="horizontal">
          <Panel>
            <NavBar />
          </Panel>
          <PanelResizeHandle className="w-0.5 bg-[#1f1f1f] hover:bg-blue-800 duration-200" />
          <Panel>
            <Content />
          </Panel>
        </PanelGroup>
      </div>
      <div className="h-screen md:hidden">
        <span className="absolute bottom-3 left-6">
          <SheetDemo>
            <Button className="absolute w-fit h-fit bg-gray-700">
              <Menu />
            </Button>
          </SheetDemo>
        </span>
        <Content />
      </div>
    </>
  );
}
export default MainLayout;
