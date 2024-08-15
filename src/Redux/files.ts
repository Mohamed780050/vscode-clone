import { FilesAndFolder, NavBarItems } from "@/Interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
let theID = 0;
const initialState: NavBarItems = {
  Myfiles: [
    {
      id: ++theID,
      title: "VScode Clone",
      isFolder: true,
      children: [
        {
          id: ++theID,
          title: "node_modules",
          isFolder: true,
          children: [
            {
              id: ++theID,
              title: "Vite",
              isFolder: true,
              children: [
                {
                  id: ++theID,
                  title: "index.js",
                  isFolder: false,
                  children: null,
                },
              ],
            },
            { id: ++theID, title: "index.ts", isFolder: false, children: null },
          ],
        },
        {
          id: ++theID,
          title: "src",
          isFolder: true,
          children: [
            { id: ++theID, title: "assets", isFolder: true, children: null },
            {
              id: ++theID,
              title: "components",
              isFolder: true,
              children: [
                {
                  id: ++theID,
                  title: "Button.tsx",
                  isFolder: false,
                  children: null,
                },
                {
                  id: ++theID,
                  title: "Input.tsx",
                  isFolder: false,
                  children: null,
                },
              ],
            },
            {
              id: ++theID,
              title: "interfaces",
              isFolder: true,
              children: [
                {
                  id: ++theID,
                  title: "interfase.ts",
                  isFolder: false,
                  children: null,
                },
              ],
            },
            { id: ++theID, title: "layouts", isFolder: true, children: null },
            { id: ++theID, title: "Redux", isFolder: true, children: null },
            { id: ++theID, title: "Routers", isFolder: true, children: null },
            { id: ++theID, title: "App.css", isFolder: false, children: null },
            { id: ++theID, title: "App.tsx", isFolder: false, children: null },
            {
              id: ++theID,
              title: "index.css",
              isFolder: false,
              children: null,
            },
            {
              id: ++theID,
              title: "index.tsx",
              isFolder: false,
              children: null,
            },
          ],
        },
        { id: ++theID, title: "index.html", isFolder: false, children: null },
        { id: ++theID, title: "index.ts", isFolder: false, children: null },
        { id: ++theID, title: "index.css", isFolder: false, children: null },
        { id: ++theID, title: "index.py", isFolder: false, children: null },
        { id: ++theID, title: "index.cpp", isFolder: false, children: null },
        { id: ++theID, title: "index.txt", isFolder: false, children: null },
      ],
    },
  ],
  openFiles: [],
  content: "",
};
export const files = createSlice({
  name: "files",
  initialState,
  reducers: {
    setOpenFiles: (state, action: PayloadAction<FilesAndFolder>) => {
      state.openFiles = [...state.openFiles, action.payload];
    },
  },
});
export const { setOpenFiles } = files.actions;
export default files.reducer;
