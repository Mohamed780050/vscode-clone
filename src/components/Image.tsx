import { File } from "lucide-react";
interface ImageProps {
  extention: string;
}
function Image({ extention }: ImageProps) {
  // const theEXet = {
  //   js: "javascript",
  //   ts: "typescript",
  //   html: "html",
  //   css: "css",
  //   py: "python",
  //   cpp: "cpp",
  //   jsx: "react",
  //   tsx: "react_ts",
  // };
  // return Object.prototype.hasOwnProperty.call(theEXet, extention) ? (
  //
  // ) : (
  //   <File size={20} />
  // );
  switch (extention) {
    case "js":
      return <img src={`/icons/javascript.svg`} className="min-w-5 min-h-5" />;
    case "ts":
      return <img src={`/icons/typescript.svg`} className="min-w-5 min-h-5" />;
    case "html":
      return <img src={`/icons/html.svg`} className="min-w-5 min-h-5" />;
    case "css":
      return <img src={`/icons/css.svg`} className="min-w-5 min-h-5" />;
    case "py":
      return <img src={`/icons/python.svg`} className="min-w-5 min-h-5" />;
    case "cpp":
      return <img src={`/icons/cpp.svg`} className="min-w-5 min-h-5" />;
    case "jsx":
      return <img src={`/icons/react.svg`} className="min-w-5 min-h-5" />;
    case "tsx":
      return <img src={`/icons/react_ts.svg`} className="min-w-5 min-h-5" />;
    default:
      return <File size={20} />;
  }
}
export default Image;
