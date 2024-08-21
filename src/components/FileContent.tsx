import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import WelcomePage from "./WelcomePage";
import SyntaxHighlaughter from "./SyntaxHighlaughter";

function FileContent() {
  const { selectedFile,openFiles } = useSelector((state: RootState) => state.files);
  const Lines = selectedFile[0]?.content?.split("\n");
  let TheID = 0;
  return (
    <>
      {openFiles.length ? (
        <ol className="p-2 overflow-scroll whitespace-nowrap contentScroll h-full bg-[#1f1f1f] text-white">
          {Lines?.map((line, index) => (
            <li key={++TheID} className="flex items-center justify-between">
              <span className="px-2 py-0.5 min-w-10 text-center select-none">
                {index + 1}
              </span>
              <pre className="pl-1 w-full text-left "><SyntaxHighlaughter content={line}/></pre>
            </li>
          ))}
        </ol>
      ) : (
        <WelcomePage />
      )}
    </>
  );
}
export default FileContent;
