import Content from "@/components/Content";
import NavBar from "@/components/NavBar";
import { SheetDemo } from "@/components/SheetDemo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function MainLayout() {
  console.log(window.innerWidth);
  return (
    <>
      <div className="h-screen">
        <PanelGroup
          autoSaveId="persistence"
          direction="horizontal"
          className="block md:flex"
          style={{ display: `${window.innerWidth < 768 ? "bolck" : "flex"}` }}
        >
          <Panel>
            <NavBar className="hidden md:block" />
          </Panel>
          <PanelResizeHandle className="w-0.5 hidden md:block bg-[#1f1f1f] hover:bg-blue-800 duration-200" />
          <Panel>
            <Content />
          </Panel>
        </PanelGroup>
        <span className="absolute bottom-3 left-6">
          <SheetDemo>
            <Button className="absolute w-fit h-fit bg-gray-700">
              <Menu />
            </Button>
          </SheetDemo>
        </span>
      </div>
    </>
  );
}
export default MainLayout;
