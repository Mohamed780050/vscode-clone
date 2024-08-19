import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import Mapper from "./Mapper";

function TabsContainer() {
  const { openFiles } = useSelector((state: RootState) => state.files);

  return <>{openFiles.map((file) => (
    <Mapper file={file} />
  ))}</>;
}
export default TabsContainer;
