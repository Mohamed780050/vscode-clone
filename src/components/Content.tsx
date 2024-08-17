import FileContent from "./FileContent";
import Tabs from "./Tabs";
function Content() {
  return (
    <div className="w-full overflow-hidden">
      <Tabs/>
      <FileContent/>
    </div>
  );
}
export default Content;