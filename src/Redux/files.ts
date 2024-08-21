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
                  content: `console.log("Working")`,
                },
              ],
            },
            {
              id: ++theID,
              title: "index.ts",
              isFolder: false,
              content: ``,
              children: null,
            },
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
                  content: `import { ReactNode } from "react";

interface Mybutton {
  children: ReactNode;
  className: string;
}
function Button({ children, className = "" }: Mybutton) {
  return <button className={className}>{children}</button>;
}
export default Button;`,
                  children: null,
                },
                {
                  id: ++theID,
                  title: "Input.tsx",
                  isFolder: false,
                  content: `import { forwardRef } from "react";

interface Myinput {
  className: string;
}
function Input({  className = "" }: Myinput) {
  return <input className={className}/>;
}
export default forwardRef(Input);`,
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
                  content: ``,
                  children: null,
                },
              ],
            },
            { id: ++theID, title: "layouts", isFolder: true, children: null },
            { id: ++theID, title: "Redux", isFolder: true, children: null },
            { id: ++theID, title: "Routers", isFolder: true, children: null },
            {
              id: ++theID,
              title: "App.css",
              isFolder: false,
              content: ``,
              children: null,
            },
            {
              id: ++theID,
              title: "App.tsx",
              isFolder: false,
              content: ``,
              children: null,
            },
            {
              id: ++theID,
              title: "index.css",
              isFolder: false,
              content: ``,
              children: null,
            },
            {
              id: ++theID,
              title: "index.tsx",
              isFolder: false,
              content: ``,
              children: null,
            },
          ],
        },
        {
          id: ++theID,
          title: "index.html",
          isFolder: false,
          content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
          children: null,
        },
        {
          id: ++theID,
          title: "index.ts",
          isFolder: false,
          children: null,
          content: `console.log("Hello! World")`,
        },
        {
          id: ++theID,
          title: "index.css",
          isFolder: false,
          content: `.centralized {
  top: 50%;
  right: -1px;
  transform: translate(-50%, -50%);
}`,
          children: null,
        },
        {
          id: ++theID,
          title: "index.py",
          isFolder: false,
          children: null,
          content: `print("Hello! World")
print("this is a second line")`,
        },
        {
          id: ++theID,
          title: "index.cpp",
          isFolder: false,
          content: ``,
          children: null,
        },
        {
          id: ++theID,
          title: "index.txt",
          isFolder: false,
          content: `this is a normal text file`,
          children: null,
        },
      ],
    },
  ],
  openFiles: [],
  selectedFile: [],
  openSequence: [],
  toRemove: [],
};
export const files = createSlice({
  name: "files",
  initialState,
  reducers: {
    setOpenFiles: (state, action: PayloadAction<FilesAndFolder>) => {
      state.openFiles = [...state.openFiles, action.payload];
    },
    setSelectedFile: (state, action: PayloadAction<FilesAndFolder>) => {
      state.selectedFile = [action.payload];
    },
    removeFormOpenFiles: (state, action: PayloadAction<FilesAndFolder[]>) => {
      state.openFiles = action.payload;
    },
    removeSelectedFile: (state, action: PayloadAction<FilesAndFolder[]>) => {
      state.selectedFile = action.payload;
    },
    setOpenSequence: (state, action: PayloadAction<FilesAndFolder[]>) => {
      state.openSequence = action.payload;
    },
    setToRemove: (state, action: PayloadAction<FilesAndFolder[]>) => {
      state.toRemove = action.payload;
    },
  },
});
export const {
  setOpenFiles,
  setSelectedFile,
  removeFormOpenFiles,
  removeSelectedFile,
  setOpenSequence,
  setToRemove,
} = files.actions;
export default files.reducer;
