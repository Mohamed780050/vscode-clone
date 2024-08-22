import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import Recarsive from "./Recarsive";

function RecarsiveContainer() {
  const { Myfiles } = useSelector((state: RootState) => state.files);

  return (
    <>
      <Recarsive fileChildren={Myfiles} />
    </>
  );
}
export default RecarsiveContainer;
