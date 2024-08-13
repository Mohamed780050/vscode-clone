import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Content from "@/components/Content";

const routes = createBrowserRouter(createRoutesFromElements(<>
<Route path="/" element={<MainLayout/>}>
  <Route index element={<Content/>}/>
</Route>
</>));
export default routes;
