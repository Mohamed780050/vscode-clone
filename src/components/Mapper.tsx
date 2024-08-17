import { FilesAndFolder } from "@/Interfaces/interfaces";
import FileIcon from "./FileIcon";
import { useRef } from "react";
function Mapper({ file }: { file: FilesAndFolder }) {
  const theTarget = useRef();
  return (
    <>
      <li
        key={file.id}
        ref={theTarget}
        id={`${file.id}`}
        className={`px-6 py-4 border-r border-b flex items-center cursor-pointer ${
          file.selected ? "bg-red-300" : ""
        }`}
      >
        <FileIcon name={file.title} />
        <p className="ml-1">{file.title}</p>
      </li>
    </>
  );
}
export default Mapper;
