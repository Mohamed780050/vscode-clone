import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import Mapper from "./Mapper";

function Tabs() {
  const { openFiles } = useSelector((state: RootState) => state.files);
  return (
    <div className="min-w-full">
      <ul className="flex overflow-x-scroll">
       {openFiles.map(file => <Mapper file={file}/>)}
      </ul>
    </div>
  );
}
export default Tabs;
