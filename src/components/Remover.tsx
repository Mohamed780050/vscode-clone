import { FilesAndFolder } from "@/Interfaces/interfaces";
import { removeFormOpenFiles, removeSelectedFile } from "@/Redux/files";
import { RootState } from "@/Redux/store";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

function Remover({ file }: { file: FilesAndFolder }) {
  const dispatch = useDispatch();
  const { openFiles, selectedFile } = useSelector(
    (state: RootState) => state.files
  );
  const OpenFiles = openFiles.filter((theFile) => theFile !== file);
  return (
    <div className="opacity-75 flex items-center justify-center">
      <X
        size={15}
        className=" cursor-pointer hover:bg-[]"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(removeFormOpenFiles(OpenFiles));
          if (selectedFile.includes(file)) dispatch(removeSelectedFile([]));
        }}
      />
    </div>
  );
}
export default Remover;
