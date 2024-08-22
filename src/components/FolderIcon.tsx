interface FolderIconProps {
  name: string;
}
function FolderIcon({ name }: FolderIconProps) {
  const theName: { [key: string]: string } = {
    src: "folder-src",
    node_modules: "folder-node",
    components: "folder-components",
    interfaces: "folder-interface",
    layouts: "folder-layout",
    Redux: "folder-redux-store",
    Routers: "folder-routes",
    tsx: "react_ts",
  };

  return Object.prototype.hasOwnProperty.call(theName, name) ? (
    <img
      src={`/icons/${theName[name]}.svg`}
      alt={`${theName[name]}`}
      className="w-5 h-5"
    />
  ) : (
    <img
      src="/icons/folder-default.svg"
      alt="folder-defualt"
      className="w-5 h-5"
    />
  );
}

export default FolderIcon;
