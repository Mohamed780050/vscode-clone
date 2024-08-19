import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import Recarsive from "./Recarsive";

function RecarsiveContainer() {
  const { Myfiles, openFiles } = useSelector((state: RootState) => state.files);

  return (
    <>
      <Recarsive fileChildren={Myfiles} openFiles={openFiles} />
    </>
  );
}
export default RecarsiveContainer;
