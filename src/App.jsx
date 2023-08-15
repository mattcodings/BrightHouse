import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Bedroom,
  LivingRoom,
  Kitchen,
  Bathroom,
  DiningRoom,
  KidsRoom,
  Layout,
} from "./rooms";

const router = createBrowserRouter([
  {
    path: "/brighthouse/",
    element: <Layout />,
    error: <Error />,
    children: [
      {
        path: "/brighthouse/bedroom",
        element: <Bedroom />,
      },
      {
        path: "/brighthouse/living-room",
        element: <LivingRoom />,
      },
      {
        path: "/brighthouse/kitchen",
        element: <Kitchen />,
      },
      {
        path: "/brighthouse/bathroom",
        element: <Bathroom />,
      },
      {
        path: "/brighthouse/dining-room",
        element: <DiningRoom />,
      },
      {
        path: "/brighthouse/kids-room",
        element: <KidsRoom />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
