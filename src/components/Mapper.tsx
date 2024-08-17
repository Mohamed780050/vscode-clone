import { FilesAndFolder } from "@/Interfaces/interfaces";
import FileIcon from "./FileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFile } from "@/Redux/files";
import { RootState } from "@/Redux/store";
import Remover from "./Remover";
function Mapper({ file }: { file: FilesAndFolder }) {
  const dispatch = useDispatch();
  const { selectedFile } = useSelector((state: RootState) => state.files);
  return (
    <>
      <li key={file.id} className="relative">
        <div
          id={`${file.id}`}
          onClick={() => {
            dispatch(setSelectedFile(file));
          }}
          className={`select-none px-6 py-4 border-r border-b flex items-center cursor-pointer ${
            selectedFile.includes(file) ? " bg-[#BBB]" : ""
          }
        `}
        >
          <FileIcon name={file.title} />
          <p className="ml-1">{file.title}</p>
        </div>
        <Remover file={file} />
      </li>
    </>
  );
}
export default Mapper;
