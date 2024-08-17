import { useDispatch } from "react-redux";
import AccordionDemo from "./Accordion";
import { FilesAndFolder } from "@/Interfaces/interfaces";
import FileIcon from "./FileIcon";
import FolderIcon from "./FolderIcon";
import { setOpenFiles, setSelectedFile } from "@/Redux/files";

function Recarsive({
  fileChildren,
  openFiles,
}: {
  fileChildren: FilesAndFolder[];
  openFiles: FilesAndFolder[];
}) {
  const dispatch = useDispatch();
  return (
    <>
      {fileChildren.map((file) => (
        <>
          {file.isFolder ? (
            <AccordionDemo
              content={
                <span className={`block ml-3`}>
                  {file.isFolder && file.children ? (
                    <Recarsive
                      fileChildren={file.children}
                      openFiles={openFiles}
                    />
                  ) : (
                    ""
                  )}
                </span>
              }
            >
              <li>
                <div className="flex items-center space-x-1 cursor-pointer text-lg">
                  <FolderIcon name={file.title} />
                  <span className="select-none">{file.title}</span>
                </div>
              </li>
            </AccordionDemo>
          ) : (
            <li
              onClick={() => {
                dispatch(setSelectedFile(file))
                if (openFiles.includes(file)) return "";
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
