interface FolderIconProps {
  name: string;
}
function FolderIcon({ name }: FolderIconProps) {
  switch (name) {
    case "src":
      return <img src="/icons/folder-src.svg" alt="" className="w-5 h-5" />;
    case "node_modules":
      return <img src="/icons/folder-node.svg" alt="" className="w-5 h-5" />;
    case "components":
      return (
        <img src="/icons/folder-components.svg" alt="" className="w-5 h-5" />
      );
    case "interfaces":
      return (
        <img src="/icons/folder-interface.svg" alt="" className="w-5 h-5" />
      );
    case "layouts":
      return <img src="/icons/folder-layout.svg" alt="" className="w-5 h-5" />;
    case "Redux":
      return (
        <img src="/icons/folder-redux-store.svg" alt="" className="w-5 h-5" />
      );
    case "Routers":
      return <img src="/icons/folder-routes.svg" alt="" className="w-5 h-5" />;
    default:
      return <img src="/icons/folder-default.svg" alt="" className="w-5 h-5" />;
  }
}

export default FolderIcon;
