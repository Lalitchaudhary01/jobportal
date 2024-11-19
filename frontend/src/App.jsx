import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Jobs from "./components/Jobs";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  // {
  //   path: "/description/:id",
  //   element: <JobDescription />,
  // },
  // {
  //   path: "/browse",
  //   element: <Browse />,
  // },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
