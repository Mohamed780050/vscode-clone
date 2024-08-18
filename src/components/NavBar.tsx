import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import Recarsive from "./Recarsive";
function NavBar() {
  const { Myfiles, openFiles } = useSelector((state: RootState) => state.files);
  return (
    <div className="px-4 pt-4 shadow bg-[#181818] text-white border-r border-[#2b2b2b] overflow-hidden overflow-y-auto navBar h-full">
      <ul className="block h-full">
        <Recarsive fileChildren={Myfiles} openFiles={openFiles} />
      </ul>
    </div>
  );
}
export default NavBar;
