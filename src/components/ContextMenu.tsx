import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { removeFormOpenFiles } from "@/Redux/files";
import { setShow } from "@/Redux/contextmenu";
import { useEffect } from "react";
function ContextMenu() {
  const { position } = useSelector((state: RootState) => state.contextmenu);
  const { openFiles, toRemove } = useSelector(
    (state: RootState) => state.files
  );
  const dispatch = useDispatch();
  function showit() {
    dispatch(setShow(false));
  }
  useEffect(() => {
    window.addEventListener("click", showit);
    return () => window.removeEventListener("click", showit);
  }, []);
  const OpenFiles = openFiles.filter((item) => item !== toRemove[0]);
  return (
    <div
      onContextMenu={() => dispatch(setShow(false))}
      className={`flex absolute bg-[#181818] p-2 rounded`}
      style={{ left: position.x, top: position.y }}
    >
      <Button
        onClick={() => {
          dispatch(removeFormOpenFiles([...OpenFiles]));
          dispatch(setShow(false));
        }}
      >
        Close
      </Button>
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
