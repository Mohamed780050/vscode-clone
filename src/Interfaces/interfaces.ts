export interface NavBarItems {
  Myfiles: FilesAndFolder[];
  openfolder: FilesAndFolder[] | [];
  content: string;
}

export interface FilesAndFolder {
  title: string;
  isFolder: boolean;
  children: FilesAndFolder[] | null;
}
