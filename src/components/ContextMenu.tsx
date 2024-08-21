import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { removeFormOpenFiles } from "@/Redux/files";
import { setShow } from "@/Redux/contextmenu";

function ContextMenu() {
  const { position } = useSelector((state: RootState) => state.contextmenu);
  const dispatch = useDispatch();
  return (
    <div
      className={`absolute bg-[#181818] p-2 rounded`}
      style={{ left: position.x, top: position.y }}
    >
      <Button
        onClick={() => {
          dispatch(removeFormOpenFiles([]));
          dispatch(setShow(false));
        }}
      >
        Close all
      </Button>
    </div>
  );
}
export default ContextMenu;
