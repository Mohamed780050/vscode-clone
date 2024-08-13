import { NavBarItems } from "@/Interfaces/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { FileCodeIcon, FolderCode } from "lucide-react";
import React from "react";
const size = { size: 20 };
const initialState: NavBarItems[] = [
  {
    title: "VScode Clone",
    isFolder: true,
    icon: React.createElement(FolderCode, size),
    children: [
      {
        title: "node_modules",
        isFolder: true,
        icon: React.createElement(FolderCode, size),
        children: [
          {
            title: "Vite",
            isFolder: true,
            icon: React.createElement(FolderCode, size),
            children: [
              {
                title: "index.js",
                isFolder: false,
                icon: React.createElement(FileCodeIcon, size),
                children: null,
              },
            ],
          },
          {
            title: "index.ts",
            isFolder: false,
            icon: React.createElement(FileCodeIcon, size),
            children: null,
          },
        ],
      },
      {
        title: "index.html",
        isFolder: false,
        icon: React.createElement(FileCodeIcon, size),
        children: null,
      },
      {
        title: "index.ts",
        isFolder: false,
        icon: React.createElement(FileCodeIcon, size),
        children: null,
      },
    ],
  },
];
export const files = createSlice({
  name: "files",
  initialState,
  reducers: {},
});
export default files.reducer;
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState: YourInterface = {
//   value: "",
// };
// export const files = createSlice({
//   name: "Name",
//   initialState,
//   reducers: {
//     changeName: (state, action: PayloadAction<string>) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { changeName } = files.actions;
// export default files.reducer;
