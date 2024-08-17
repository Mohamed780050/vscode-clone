import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";

function FileContent() {
  const { selectedFile } = useSelector((state: RootState) => state.files);
  const Lines = selectedFile[0]?.content?.split("\n");
  console.log(Lines);
  return (
    <ol>
      {Lines?.map((line) => (
        <li>{line}</li>
      ))}
    </ol>
  );
}
export default FileContent;
