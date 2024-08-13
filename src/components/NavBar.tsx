import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { NavBarItems } from "@/Interfaces/interfaces";
import AccordionDemo from "./Accordion";
import FileIcon from "./FileIcon";
import FolderIcon from "./FolderIcon";
function getAllFilesAndFolders(Files: NavBarItems[]) {
  return (
    <>
      {Files.map((file) => (
        <>
          {file.isFolder ? (
            <AccordionDemo
              content={
                <span className={`block ml-3`}>
                  {file.isFolder && file.children
                    ? getAllFilesAndFolders(file.children)
                    : ""}
                </span>
              }
            >
              <li>
                <div className="flex items-center space-x-1 cursor-pointer text-lg">
                  <FolderIcon name={file.title}/>
                  <span className="select-none">{file.title}</span>
                </div>
              </li>
            </AccordionDemo>
          ) : (
            <li>
              <div className="flex items-center space-x-1 cursor-pointer text-lg">
                <FileIcon name={`${file.title}`}/>
                <span className="select-none">{file.title}</span>
              </div>
            </li>
          )}
        </>
      ))}
    </>
  );
}
function NavBar() {
  const Files = useSelector((state: RootState) => state.files);
  return (
    <div className="px-4 mt-4 shadow">
      <ul className="block h-full">{getAllFilesAndFolders(Files)}</ul>
    </div>
  );
}
export default NavBar;
