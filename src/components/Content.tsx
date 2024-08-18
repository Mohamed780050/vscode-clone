import FileContent from "./FileContent";
import Tabs from "./Tabs";
function Content() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Tabs />
      <FileContent />
    </div>
  );
}
export default Content;
