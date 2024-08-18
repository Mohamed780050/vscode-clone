import { FilesAndFolder } from "@/Interfaces/interfaces";
import {
  removeFormOpenFiles,
  removeSelectedFile,
  setOpenSequence,
  setSelectedFile,
} from "@/Redux/files";
import { RootState } from "@/Redux/store";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

function Remover({ file }: { file: FilesAndFolder }) {
  const dispatch = useDispatch();
  const { openFiles, selectedFile, openSequence } = useSelector(
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
          const OpenSequence = openSequence.filter((item) => item !== file);
          dispatch(setOpenSequence(OpenSequence));
          if (selectedFile.includes(file)) dispatch(removeSelectedFile([]));
          dispatch(setSelectedFile(OpenSequence[OpenSequence.length - 1]));
        }}
      />
    </div>
  );
}
export default Remover;
