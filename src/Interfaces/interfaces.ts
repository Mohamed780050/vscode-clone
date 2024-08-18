export interface NavBarItems {
  Myfiles: FilesAndFolder[];
  openFiles: FilesAndFolder[] | [];
  selectedFile: FilesAndFolder[];
  openSequence: FilesAndFolder[];
}

export interface FilesAndFolder {
  id: number;
  title: string;
  isFolder: boolean;
  children: FilesAndFolder[] | null;
  content?: string;
}
