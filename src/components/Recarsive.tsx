import { useDispatch, useSelector } from "react-redux";
import AccordionDemo from "./Accordion";
import { FilesAndFolder } from "@/Interfaces/interfaces";
import FileIcon from "./FileIcon";
import FolderIcon from "./FolderIcon";
import { setOpenFiles, setSelectedFile, setOpenSequence } from "@/Redux/files";
import { RootState } from "@/Redux/store";

function Recarsive({ fileChildren }: { fileChildren: FilesAndFolder[] }) {
  const { openSequence, openFiles } = useSelector(
    (state: RootState) => state.files
  );
  const dispatch = useDispatch();
  let TheID = 452462344;
  return (
    <>
      {fileChildren.map((file) => (
        <>
          {file.isFolder ? (
            <AccordionDemo
              key={++TheID}
              content={
                <span className={`block ml-3`}>
                  {file.isFolder && file.children ? (
                    <Recarsive fileChildren={file.children} />
                  ) : (
                    ""
                  )}
                </span>
              }
            >
              <li key={++TheID} className="text-nowrap">
                <div className="flex items-center space-x-1 cursor-pointer text-lg">
                  <FolderIcon name={file.title} />
                  <span className="select-none">{file.title}</span>
                </div>
              </li>
            </AccordionDemo>
          ) : (
            <li
              key={++TheID}
              onClick={() => {
                dispatch(setSelectedFile(file));
                if (openFiles.filter(item => item === file).length) return "";
                const OpenSequence = openSequence.filter(
                  (item) => item !== file
                );
                dispatch(setOpenSequence([...OpenSequence, file]));
                dispatch(setOpenFiles(file));
              }}
            >
              <div className="flex items-center space-x-1 cursor-pointer text-lg">
                <FileIcon name={`${file.title}`} />
                <span className="select-none">{file.title}</span>
              </div>
            </li>
          )}
        </>
      ))}
    </>
  );
}
export default Recarsive;
