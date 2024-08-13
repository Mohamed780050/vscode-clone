
export interface NavBarItems {
  title: string;
  isFolder: boolean;
  children: NavBarItems[] | null;
}
