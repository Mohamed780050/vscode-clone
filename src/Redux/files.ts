import { NavBarItems } from "@/Interfaces/interfaces";
import { createSlice } from "@reduxjs/toolkit";
const initialState: NavBarItems[] = [
  {
    title: "VScode Clone",
    isFolder: true,
    children: [
      {
        title: "node_modules",
        isFolder: true,
        children: [
          {
            title: "Vite",
            isFolder: true,
            children: [
              {
                title: "index.js",
                isFolder: false,
                children: null,
              },
            ],
          },
          {
            title: "index.ts",
            isFolder: false,
            children: null,
          },
        ],
      },
      {
        title: "src",
        isFolder: true,
        children: [
          {
            title: "assets",
            isFolder: true,
            children: null,
          },
          {
            title: "components",
            isFolder: true,
            children: null,
          },
          {
            title: "interfaces",
            isFolder: true,
            children: null,
          },
          {
            title: "layouts",
            isFolder: true,
            children: null,
          },
          {
            title: "Redux",
            isFolder: true,
            children: null,
          },
          {
            title: "Routers",
            isFolder: true,
            children: null,
          },
          {
            title: "App.css",
            isFolder: false,
            children: null,
          },
          {
            title: "App.tsx",
            isFolder: false,
            children: null,
          },
          {
            title: "index.css",
            isFolder: false,
            children: null,
          },
          {
            title: "index.tsx",
            isFolder: false,
            children: null,
          },
        ],
      },
      {
        title: "index.html",
        isFolder: false,
        children: null,
      },
      {
        title: "index.ts",
        isFolder: false,
        children: null,
      },
      {
        title: "index.css",
        isFolder: false,
        children: null,
      },
      {
        title: "index.py",
        isFolder: false,
        children: null,
      },
      {
        title: "index.cpp",
        isFolder: false,
        children: null,
      },
      {
        title: "index.txt",
        isFolder: false,
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
