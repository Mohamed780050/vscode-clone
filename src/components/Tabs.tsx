import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import Mapper from "./Mapper";

function Tabs() {
  const { openFiles } = useSelector((state: RootState) => state.files);
  return (
    <div className="min-w-full bg-[#181818] text-white">
      <ul className="theElementWithScrollX whitespace-nowrap flex overflow-x-scroll h-[62.22px]">
       {openFiles.map(file => <Mapper file={file}/>)}
      </ul>
    </div>
  );
}
export default Tabs;
