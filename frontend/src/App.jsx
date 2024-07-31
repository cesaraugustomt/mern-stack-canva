import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Index from "./pages/Index";
import { Layout } from "./pages/Layout";
import { Home } from "./components/Home";
import { Templates } from "./components/Templates";
import { Project } from "./components/Project";
import { CreateDesign } from "./components/CreateDesign";
import { Main } from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
    ],
  },
  {
    path: "/design/create",
    element: <CreateDesign />,
  },
  {
    path: "/design/:id/edit",
    element: <Main />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
