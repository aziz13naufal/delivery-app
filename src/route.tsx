import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/home.tsx"
import Navbar from "./components/navbar/navbar"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const Router = () => {
  return (
  <div className="relative mt-16 p-7">
    <Navbar />
    <RouterProvider router={router} />
  </div>
    )
}

export default Router