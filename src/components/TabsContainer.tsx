import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import Mapper from "./Mapper";
import ContextMenu from "./ContextMenu";

function TabsContainer() {
  const { openFiles } = useSelector((state: RootState) => state.files);
  const { show } = useSelector((state: RootState) => state.contextmenu);

  return (
    <>
      {openFiles.map((file) => (
        <Mapper file={file} />
      ))}
      {show && <ContextMenu />}
    </>
  );
}
export default TabsContainer;
