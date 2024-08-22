import { File } from "lucide-react";
interface ImageProps {
  extention: string;
}
function Image({ extention }: ImageProps) {
  const theEXet: { [key: string]: string } = {
    js: "javascript",
    ts: "typescript",
    html: "html",
    css: "css",
    py: "python",
    cpp: "cpp",
    jsx: "react",
    tsx: "react_ts",
  };
  return Object.prototype.hasOwnProperty.call(theEXet, extention) ? (
    <img src={`/icons/${theEXet[extention]}.svg`} className="min-w-5 min-h-5" />
  ) : (
    <File size={20} />
  );
}
export default Image;
