export interface NavBarItems {
  Myfiles: FilesAndFolder[];
  openFiles: FilesAndFolder[] | [];
  content: string;
}

export interface FilesAndFolder {
  id: number;
  title: string;
  isFolder: boolean;
  children: FilesAndFolder[] | null;
}
