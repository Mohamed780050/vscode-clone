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
      <li
        key={file.id}
        id={`${file.id}`}
        onClick={() => {
          dispatch(setSelectedFile(file));
        }}
        className={`relative select-none p-6 space-x-2 py-4 border-[1px] border-[#2b2b2b]  flex items-center cursor-pointer  ${
          selectedFile.includes(file)
            ? " bg-[#1f1f1f] border-t-[#0078d4]"
            : "bg-[#181818]"
        }
        `}
      >
        <FileIcon name={file.title} />
        <p className="ml-1">{file.title}</p>
        <Remover file={file} />
      </li>
    </>
  );
}
export default Mapper;
