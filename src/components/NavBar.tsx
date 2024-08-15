import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import Recarsive from "./Recarsive";
function NavBar() {
  const Files = useSelector((state: RootState) => state.files.Myfiles);
  return (
    <div className="px-4 mt-4 shadow">
      <ul className="block h-full">
        <Recarsive fileChildren={Files} />
      </ul>
    </div>
  );
}
export default NavBar;
