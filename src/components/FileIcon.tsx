import Image from "./Image";
interface FileiconProps {
  name: string;
}
function FileIcon({ name }: FileiconProps) {
  const exetention = name.split(".");
  return (
    <div>
      <Image extention={`${exetention[1]}`} />
    </div>
  );
}
export default FileIcon;
