import { useDispatch } from "react-redux";
import TabsContainer from "./TabsContainer";
import { setShow, setPosition } from "@/Redux/contextmenu";

function Tabs() {
  const dispatch = useDispatch();
  return (
    <div
      className="min-w-full bg-[#181818] text-white"
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setShow(true));
        dispatch(setPosition({ x: e.clientX, y: e.clientY }));
      }}
    >
      <ul className="theElementWithScrollX whitespace-nowrap flex overflow-x-scroll">
        <TabsContainer />
      </ul>
    </div>
  );
}
export default Tabs;
