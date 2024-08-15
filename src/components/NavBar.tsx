import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import Recarsive from "./Recarsive";
function NavBar() {
  const {Myfiles, openFiles} = useSelector((state: RootState) => state.files);
  return (
    <div className="px-4 mt-4 shadow">
      <ul className="block h-full">
        <Recarsive fileChildren={Myfiles} openFiles={openFiles} />
      </ul>
    </div>
  );
}
export default NavBar;
