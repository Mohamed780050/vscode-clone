import { File } from "lucide-react";
interface ImageProps {
  extention: string;
}
function Image({ extention }: ImageProps) {
  switch (extention) {
    case "js":
      return <img src="/icons/javascript.svg" className="w-5 h-5" />;
    case "ts":
      return <img src="/icons/typescript.svg" className="w-5 h-5" />;
    case "html":
      return <img src="/icons/html.svg" className="w-5 h-5" />;
    case "css":
      return <img src="/icons/css.svg" className="w-5 h-5" />;
    case "py":
      return <img src="/icons/python.svg" className="w-5 h-5" />;
    case "cpp":
      return <img src="/icons/cpp.svg" className="w-5 h-5" />;
    case "jsx":
      return <img src="/icons/react.svg" className="w-5 h-5" />;
    case "tsx":
      return <img src="/icons/react_ts.svg" className="w-5 h-5" />;
    default:
      return <File size={20} />;
  }
}
export default Image;
